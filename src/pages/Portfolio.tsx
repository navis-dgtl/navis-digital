import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import PortfolioNav from "@/components/PortfolioNav";
import headshot from "@/assets/headshot.jpeg";
import speakingPhoto from "@/assets/speaking-photo.jpeg";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Globe,
  ArrowRight,
  GraduationCap,
  Award,
  Code,
  Cpu,
  Database,
  Cloud,
  BarChart,
  Users
} from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] flex items-center justify-center pt-20 px-6 pb-32">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Headshot - circular image above badge */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
              <img src={headshot} alt="Nick Prince" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6">
            <span className="text-sm text-muted-foreground">AI Solutions Architect | Enterprise Implementation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            I've trained <span className="text-primary">9,000+</span> people to actually use AI
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI Solutions Architect | Enterprise Implementation | ML Systems | Change Management
          </p>

          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            Building bridges between technical possibilities and business operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="mailto:nickcprince@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+14055505680">
                <Phone className="mr-2 h-5 w-5" />
                +1 405 550 5680
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section id="numbers" className="py-20 px-6 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            By the Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "9,000+", label: "Staff trained on AI" },
              { number: "1,000+", label: "Staff members using AI tools I deployed" },
              { number: "85%", label: "Adoption rate in first quarter" },
              { number: "200+", label: "Hours saved monthly through automation" },
              { number: "71+", label: "Training resources published" },
              { number: "11.3M", label: "Total social media following" },
              { number: "$450K+", label: "Annual AI budget managed" },
              { number: "2", label: "AI companies founded" }
            ].map((metric, index) => (
              <Card key={index} className="p-8 flex flex-col items-center justify-center text-center border-primary/20 bg-card/50 min-h-[180px]">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {metric.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground leading-snug">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed flex-1">
              <p>
                I lead enterprise AI transformation at <span className="text-foreground font-semibold">Life.Church & YouVersion</span> as AI Solutions Architect, where I've implemented Claude Enterprise, Cursor, n8n, and custom AI solutions across 1,000+ staff members. In my first quarter, I achieved 85% adoption through the AI Resource & Learning Hub I designed and launched. I've personally trained over 9,000 staff members—from complete AI beginners to teams with deeply integrated workflows—and created 71+ training resources in just 6 months.
              </p>

              <p>
                Before this role, I founded <span className="text-foreground font-semibold">Navis.Digital</span>, an AI consultancy where I led engineers, ML researchers, and automation specialists in delivering AI implementations for businesses. I also built <span className="text-foreground font-semibold">Forgeflow AI</span>, a low/no-code platform that enabled thousands to build and deploy AI applications.
              </p>

              <p>
                My background combines technical depth (<span className="text-primary font-semibold">Harvard Computer Science & AI for Leaders program</span>, full-stack development, Python/JavaScript/Node.js/TypeScript) with proven ability to drive adoption at scale. I've also built social media properties reaching 11.3 million followers, with features in Huffington Post, BuzzFeed, ABC News, and The Ellen Show—demonstrating I understand how to make technology accessible and engaging.
              </p>
            </div>

            {/* Speaking Photo */}
            <div className="lg:w-80 w-full flex-shrink-0">
              <div className="rounded-lg overflow-hidden border border-primary/20">
                <img 
                  src={speakingPhoto} 
                  alt="Nick Prince speaking at a tech summit" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* What I Do Section */}
      <section id="what-i-do" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What I Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Enterprise AI Implementation",
                description: "I've deployed Claude Enterprise, Cursor, n8n, and custom AI solutions across 1,000+ employees. This includes full-cycle implementation: vendor evaluation, phased rollout, training infrastructure, governance frameworks, and adoption tracking. I designed and launched Life.Church's AI Resource & Learning Hub, achieving 85% staff engagement in the first quarter."
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "AI Architecture & Development",
                description: "Full-stack development of AI agents, orchestrations, and applications for internal process improvements. I build systems that maximize safety, performance, and user experience—not just demos, but production systems that teams rely on daily."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "AI Training & Change Management",
                description: "I've trained 9,000+ staff members across every skill level—from people who've never touched AI to teams with deeply integrated workflows. My approach yields exponential productivity gains because I meet people where they are: one-on-ones for executives, workshops for teams, keynotes for organizations."
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: "AI Consulting & Strategy",
                description: "Through Navis.Digital, I led teams of engineers, ML researchers, and automation specialists helping businesses transform AI potential into measurable outcomes. Demonstrated deep technical knowledge in LLMs (95% proficiency), AI agents (90% proficiency), and workflow automation."
              }
            ].map((capability, index) => (
              <Card key={index} className="p-8 border-primary/20 bg-card/50 hover:border-primary/40 transition-colors">
                <div className="text-primary mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {/* Project 1 */}
            <Card className="p-8 border-primary/20 bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Enterprise AI Transformation at Life.Church & YouVersion
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground">
                    Deploy multiple AI platforms (Claude Enterprise, Cursor, n8n) across 1,000+ employees with varying technical skills and no existing AI infrastructure.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What I Built:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>AI Resource & Learning Hub (centralized knowledge base and training platform)</li>
                    <li>Hundreds of automation workflows using n8n (200+ hours saved monthly)</li>
                    <li>Custom AI agents and orchestrations for internal processes</li>
                    <li>71+ training resources reaching 9,000+ staff members</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>85% staff engagement in first quarter</li>
                    <li>9,000+ staff trained through AI Resource & Learning Hub</li>
                    <li>200+ hours saved monthly through automation workflows</li>
                    <li>71+ resources published in 6 months</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="p-8 border-primary/20 bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Forgeflow AI — Low/No-Code AI Platform
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground">
                    Most organizations want AI capabilities but lack the technical resources to build custom applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What I Built:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Low/no-code AI application builder</li>
                    <li>Chatbot development toolkit</li>
                    <li>Large-scale data processing and querying interfaces</li>
                    <li>Rapid build-test-deploy workflow</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Enabled thousands of users to build and deploy AI applications</li>
                    <li>Democratized AI development for non-technical users</li>
                    <li>Supported use cases from conversational AI to enterprise data processing</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="p-8 border-primary/20 bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Navis.Digital — AI Consultancy
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground">
                    Businesses needed practical AI solutions but struggled to translate technology into business outcomes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What I Built:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>AI implementation methodology</li>
                    <li>Prompt engineering frameworks (95% proficiency demonstrated)</li>
                    <li>AI agent development (90% proficiency)</li>
                    <li>Workflow process automation systems</li>
                    <li>Adoption training programs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Transformed AI potential into measurable business outcomes for multiple clients</li>
                    <li>Led team of engineers, ML researchers, and automation specialists</li>
                    <li>Delivered end-to-end AI implementations from strategy to deployment</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="p-8 border-primary/20 bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                n8n Automation Platform
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground">
                    Cross-functional teams needed faster turnaround on repetitive tasks without adding headcount.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What I Built:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>RFP response automation (OpenAI + Google Docs + RAG for citations)</li>
                    <li>IT documentation reformatter for brand compliance</li>
                    <li>AI-powered software risk assessment generator</li>
                    <li>Mobile triggers via Apple Shortcuts and email</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>2,100+ workflow executions documented</li>
                    <li>200+ hours saved monthly</li>
                    <li>60% reduction in manual processes</li>
                    <li>Supports Legal, Purchasing, Campus Ops, and Engineering teams</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Project 5 */}
            <Card className="p-8 border-primary/20 bg-card/50">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Social Media Empire (11.3M Followers)
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground">
                    Build and grow social media properties that capture attention and drive engagement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What I Built:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Multiple social media pages ranging from 30,000 to 2.5M followers</li>
                    <li>Content systems that scaled across Instagram and Facebook</li>
                    <li>11.3M total network following</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Media Features:</h4>
                  <p className="text-muted-foreground mb-2">
                    Huffington Post, The Ellen Show, BuzzFeed, Daily Mail, ABC News
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Why This Matters for AI:</h4>
                  <p className="text-muted-foreground">
                    This demonstrates ability to make complex technology accessible and engaging—the same skill that drives AI adoption. Technology only matters if people actually use it.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>

          <div className="space-y-8">
            <Card className="p-8 border-primary/20 bg-card/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">AI Solutions Architect</h3>
                  <p className="text-xl text-foreground">Life.Church & YouVersion</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0">
                  <p>September 2019 – Present</p>
                  <p>Edmond, OK</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Lead enterprise-wide AI transformation across 1,000+ staff members. Implemented Claude Enterprise, Cursor, n8n, and custom AI solutions. Developed and deployed hundreds of automation workflows saving 200+ hours monthly. Designed and launched AI Resource & Learning Hub achieving 85% staff engagement in Q1 and training 9,000+ staff. Created and delivered 71+ targeted AI training resources over 6 months.
              </p>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Developed and deployed hundreds of automation workflows (200+ hours saved monthly)</li>
                  <li>Designed AI Resource & Learning Hub (85% engagement, 9,000+ staff trained)</li>
                  <li>Created 71+ training resources and delivered targeted AI training programs</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-card/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Founder & CEO</h3>
                  <p className="text-xl text-foreground">Navis.Digital</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0">
                  <p>January 2022 – October 2024</p>
                  <p>Oklahoma City, OK</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Transformed AI potential into measurable business outcomes through implementation, prompt engineering, and adoption training. Developed deep technical expertise in LLMs (95% proficiency), prompt engineering (95%), AI agents (90%), and workflow process automation. Led team of engineers, ML researchers, and automation specialists delivering AI implementations for businesses.
              </p>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Technical Proficiencies Demonstrated:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="border-primary/40">LLMs: 95%</Badge>
                  <Badge variant="outline" className="border-primary/40">Prompt Engineering: 95%</Badge>
                  <Badge variant="outline" className="border-primary/40">AI Agents: 90%</Badge>
                  <Badge variant="outline" className="border-primary/40">Workflow Automation: Advanced</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-card/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Founder and CEO</h3>
                  <p className="text-xl text-foreground">Forgeflow AI</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0">
                  <p>January 2023 – August 2024</p>
                  <p>Oklahoma City, OK</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Developed low/no-code AI application builder enabling individuals and organizations to rapidly build, test, and deploy AI-powered applications. From chatbots to large-scale data processing, Forgeflow enabled thousands to harness AI capabilities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
              </h3>

              <Card className="p-6 border-primary/20 bg-card/50">
                <h4 className="text-xl font-bold mb-2">Harvard University</h4>
                <p className="text-foreground font-semibold mb-1">Computer Science & AI for Leaders</p>
                <p className="text-muted-foreground text-sm mb-2">2025</p>
              </Card>

              <Card className="p-6 border-primary/20 bg-card/50">
                <h4 className="text-xl font-bold mb-2">Oklahoma State University</h4>
                <p className="text-foreground font-semibold mb-1">Double Major: Entrepreneurship & Marketing</p>
                <p className="text-muted-foreground text-sm mb-2">2019 | Stillwater, OK</p>
              </Card>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Award className="h-6 w-6" />
                Certifications
              </h3>

              <Card className="p-6 border-primary/20 bg-card/50">
                <h4 className="text-lg font-bold mb-2">Credential of Leadership, Impact, and Management in Business</h4>
                <p className="text-muted-foreground text-sm mb-2">Harvard Business School Online | April 2025</p>
                <p className="text-muted-foreground text-sm">
                  Rigorous program covering team leadership, business strategy, digital transformation, and organizational impact.
                </p>
              </Card>

              <Card className="p-6 border-primary/20 bg-card/50">
                <h4 className="text-lg font-bold mb-2">Certificate of Specialization in Digital Transformation and AI</h4>
                <p className="text-muted-foreground text-sm mb-2">June 2025</p>
                <p className="text-muted-foreground text-sm">
                  Focused on leading large-scale organizational AI implementation and digital initiative transformation.
                </p>
              </Card>

              <Card className="p-6 border-primary/20 bg-card/50">
                <h4 className="text-lg font-bold mb-2">AI for Leaders</h4>
                <p className="text-muted-foreground text-sm mb-2">October 2025</p>
                <p className="text-muted-foreground text-sm">
                  Developing leaders to specialize in AI-driven systems and change management.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">AI & Machine Learning</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-semibold">Platforms:</span> Claude.ai, Cursor, VS Code, Notion</p>
                <p><span className="text-foreground font-semibold">AI/ML:</span> LLMs, Machine Learning, AI Agents</p>
                <p><span className="text-foreground font-semibold">Specializations:</span> Prompt engineering, AI implementation, workflow automation</p>
                <p><span className="text-foreground font-semibold">Proficiency:</span> LLMs (95%), Prompt Engineering (95%), AI Agents (90%)</p>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Development</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-semibold">Languages:</span> Python, JavaScript, Node.js, TypeScript</p>
                <p><span className="text-foreground font-semibold">Skills:</span> Full-stack development, software development, AI application architecture</p>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Automation & Integration</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-semibold">Platforms:</span> n8n, workflow process automation</p>
                <p><span className="text-foreground font-semibold">Capabilities:</span> Workflow Design, Optimization, AI orchestrations</p>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Enterprise & Cloud</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-semibold">Platforms:</span> Databricks, Salesforce Cloud, ServiceNow</p>
                <p><span className="text-foreground font-semibold">Skills:</span> Cloud architecture, enterprise software implementation</p>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Data & Analytics</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-semibold">Tools:</span> Power BI, data analytics tools, data visualization</p>
                <p><span className="text-foreground font-semibold">Skills:</span> ML libraries implementation, large-scale data processing</p>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Leadership & Management</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-semibold">Skills:</span> Training Development, Change Management, Technical Writing, Presentations</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* What Makes Me Different */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes Me Different
          </h2>

          <Card className="p-8 border-primary/20 bg-card/50 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">The Gap I Fill</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most AI professionals fall into one of two categories:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
              <li><span className="font-semibold text-foreground">Technical specialists</span> who can build models but struggle to drive organizational adoption</li>
              <li><span className="font-semibold text-foreground">Strategy consultants</span> who can pitch AI but can't implement it</li>
            </ul>
            <p className="text-lg text-foreground font-semibold">
              I do both. I completed Harvard's Computer Science & AI for Leaders program and build production AI systems. I've also trained 9,000+ people and achieved 85% adoption rates. That combination is rare.
            </p>
          </Card>

          <Card className="p-8 border-primary/20 bg-card/50">
            <h3 className="text-2xl font-bold mb-6 text-primary">Proof Points</h3>
            <div className="space-y-4">
              {[
                { claim: "Technical depth", evidence: "Harvard CS & AI for Leaders, Python/JavaScript/TypeScript, full-stack AI development" },
                { claim: "Implementation experience", evidence: "1,000+ employees, multiple platforms, custom AI agents" },
                { claim: "Training capability", evidence: "9,000+ staff trained, 85% adoption, 71+ resources published" },
                { claim: "Entrepreneurship", evidence: "Founded 2 AI companies, led engineering teams" },
                { claim: "Audience understanding", evidence: "11.3M followers, major media features" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-4">
                  <div className="font-semibold text-foreground md:w-1/3">{item.claim}</div>
                  <div className="text-muted-foreground md:w-2/3">{item.evidence}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="connect" className="py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's talk about how I can help your organization get real value from AI
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            I'm looking for AI implementation, strategy, or engineering roles where I can drive transformation at scale.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Willing to relocate anywhere. Authorized to work in the US for any employer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <a href="mailto:nickcprince@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                nickcprince@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+14055505680">
                <Phone className="mr-2 h-5 w-5" />
                +1 405 550 5680
              </a>
            </Button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://navis.digital" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                navis.digital
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/navis-dgtl" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/nickcprince" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://instagram.com/nickcprince" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 px-6 border-t border-primary/20">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nick Prince. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
