import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Brain, RefreshCw, Users, Heart } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Prompt Engineering Essentials",
    description: "Custom-crafted prompts for consistent, high-quality AI outputs. Perfect for teams seeking immediate improvements.",
    price: "From $1,500",
    features: ["5 Custom Prompts", "Implementation Guide", "Follow-up Consultation"]
  },
  {
    icon: Brain,
    title: "AI Implementation Strategy",
    description: "Comprehensive roadmap from assessment to deployment. Strategic guidance for successful AI integration.",
    price: "From $5,000",
    features: ["AI Readiness Assessment", "Implementation Roadmap", "3 Consultation Sessions"]
  },
  {
    icon: RefreshCw,
    title: "Prompt Engineering as a Service",
    description: "Ongoing prompt optimization subscription. Continuously evolving AI capabilities for your team.",
    price: "From $1,800/mo",
    features: ["Monthly New Prompts", "Bi-weekly Office Hours", "Performance Analysis"]
  },
  {
    icon: Users,
    title: "AI Training & Adoption",
    description: "Build internal AI capabilities through customized training. Transform your team into confident AI users.",
    price: "From $7,500",
    features: ["Readiness Assessment", "4 Training Sessions", "30-Day Support"]
  },
  {
    icon: Heart,
    title: "Non-Profit AI Transformation",
    description: "Mission-aligned AI solutions for faith-based organizations. Maximize impact with limited resources.",
    price: "From $6,000",
    features: ["Mission-Aligned Strategy", "Staff Training", "60-Day Support"]
  }
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services Designed For{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From prompt engineering to full AI transformation, we meet you where you are and guide you forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/80"
                  onClick={scrollToContact}
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Need something custom?</p>
          <Button variant="outline" size="lg" className="border-primary/30" onClick={scrollToContact}>
            Discuss Your Needs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
