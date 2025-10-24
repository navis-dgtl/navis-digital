import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, organization, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact form email:", { name, email, organization });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    // Send notification email to Navis
    const emailData = {
      from: "Navis Contact Form <onboarding@resend.dev>",
      to: ["hello@navis.digital"],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Error sending email:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    // Send confirmation email to user
    const confirmationData = {
      from: "Navis <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Navis",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 4px solid #99E9F2; padding-left: 16px; margin: 16px 0;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>Best regards,<br>The Navis Team</p>
      `,
    };

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(confirmationData),
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
