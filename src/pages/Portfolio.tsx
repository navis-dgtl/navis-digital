import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Mail,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const metrics = [
    { value: "2,000+", label: "Individuals trained on AI", icon: Users },
    { value: "1,000+", label: "Staff members using AI tools", icon: TrendingUp },
    { value: "85%", label: "Adoption rate in first quarter", icon: CheckCircle2 },
    { value: "11.3M", label: "Total social media following", icon: Sparkles },
    { value: "$450K+", label: "Annual AI budget managed", icon: Award },
    { value: "2", label: "AI companies founded", icon: Briefcase },
  ];

  const capabilities = [
    {
      title: "Enterprise AI Implementation",
      description:
        "Deployed Claude, Microsoft Copilot, Cursor, and custom AI systems across 1,000+ employees. Full-cycle implementation: vendor evaluation, phased rollout, training infrastructure, governance frameworks, and adoption tracking. Designed and launched Life.Church's AI Resource & Learning Hub, achieving 85% staff engagement in the first quarter.",
      icon: Zap,
    },
    {
      title: "AI Architecture & Development",
      description:
        "Full-stack development of AI agents, orchestrations, and applications for internal process improvements. Build systems that maximize safety, performance, and user experience—not just demos, but production systems that teams rely on daily.",
      icon: Award,
    },
    {
      title: "AI Training & Change Management",
      description:
        "Trained 2,000+ individuals across every skill level—from people who've never touched AI to teams with deeply integrated workflows. Approach yields exponential productivity gains by meeting people where they are: one-on-ones for executives, workshops for teams, keynotes for organizations.",
      icon: Users,
    },
    {
      title: "AI Consulting & Strategy",
      description:
        "Through Navis.Digital, led teams of engineers, ML researchers, and automation specialists helping businesses transform AI potential into measurable outcomes. Demonstrated deep technical knowledge in LLMs (95% proficiency), AI agents (90% proficiency), and workflow automation.",
      icon: Briefcase,
    },
  ];

  const projects = [
    {
      title: "Enterprise AI Transformation at Life.Church",
      challenge:
        "Deploy multiple AI platforms (Claude, Copilot, Cursor) across 1,000+ employees with varying technical skills and no existing AI infrastructure.",
      built: [
        "AI Resource & Learning Hub (centralized knowledge base and training platform)",
        "AI architectures optimized for safety, performance, and UX",
        "Custom AI agents and orchestrations for internal processes",
        "Training programs reaching 2,000+ individuals",
      ],
      results: [
        "85% staff engagement in first quarter",
        "Full-stack AI agents deployed for internal workflows",
        "Training delivered across 1:1, workshop, and keynote formats",
        "Exponential productivity gains across teams",
      ],
    },
    {
      title: "Forgeflow AI — Low/No-Code AI Platform",
      challenge:
        "Most organizations want AI capabilities but lack the technical resources to build custom applications.",
      built: [
        "Low/no-code AI application builder",
        "Chatbot development toolkit",
        "Large-scale data processing and querying interfaces",
        "Rapid build-test-deploy workflow",
      ],
      results: [
        "Enabled thousands of users to build and deploy AI applications",
        "Democratized AI development for non-technical users",
        "Supported use cases from conversational AI to enterprise data processing",
      ],
    },
    {
      title: "Navis.Digital — AI Consultancy",
      challenge:
        "Businesses needed practical AI solutions but struggled to translate technology into business outcomes.",
      built: [
        "AI implementation methodology",
        "Prompt engineering frameworks (95% proficiency demonstrated)",
        "AI agent development (90% proficiency)",
        "Workflow process automation systems",
        "Adoption training programs",
      ],
      results: [
        "Transformed AI potential into measurable business outcomes for multiple clients",
        "Led team of engineers, ML researchers, and automation specialists",
        "Delivered end-to-end AI implementations from strategy to deployment",
      ],
    },
    {
      title: "n8n Automation Platform",
      challenge:
        "Cross-functional teams needed faster turnaround on repetitive tasks without adding headcount.",
      built: [
        "RFP response automation (OpenAI + Google Docs + RAG for citations)",
        "IT documentation reformatter for brand compliance",
        "AI-powered software risk assessment generator",
        "Mobile triggers via Apple Shortcuts and email",
      ],
      results: [
        "2,100+ workflow executions documented",
        "200+ hours saved monthly",
        "60% reduction in manual processes",
        "Supports Legal, Purchasing, Campus Ops, and Engineering teams",
      ],
    },
  ];

  const experience = [
    {
      title: "AI Solutions Manager",
      company: "Life.Church",
      period: "September 2019 – Present",
      location: "Edmond, OK",
      description:
        "Lead enterprise-wide AI transformation across 1,000+ staff members. Implemented Claude, Cursor, Copilot, and custom AI tools. Designed and launched AI Resource & Learning Hub (85% engagement in Q1). Full-stack development of AI agents, orchestrations, and applications. Trained 2,000+ individuals through 1:1s, workshops, and keynotes.",
      achievements: [
        "Developed AI architectures for safety, performance, and UX",
        "Built training programs serving complete beginners to advanced users",
        "Delivered exponential productivity gains across all team types",
      ],
    },
    {
      title: "Founder/CEO/President",
      company: "Navis.Digital",
      period: "January 2022 – October 2024",
      location: "Oklahoma City, OK",
      description:
        "Led team of engineers, ML researchers, and automation specialists delivering AI implementations for businesses. Transformed AI potential into measurable business outcomes through implementation, prompt engineering, and adoption training.",
      achievements: [
        "LLMs: 95% proficiency",
        "Prompt Engineering: 95% proficiency",
        "AI Agents: 90% proficiency",
        "Workflow Process Automation: Advanced",
      ],
    },
    {
      title: "Founder and CEO",
      company: "Forgeflow AI",
      period: "January 2023 – August 2024",
      location: "Oklahoma City, OK",
      description:
        "Developed low/no-code AI application builder enabling individuals and organizations to rapidly build, test, and deploy AI-powered applications. From chatbots to large-scale data processing, Forgeflow enabled thousands to harness AI capabilities.",
      achievements: [],
    },
  ];

  const education = [
    {
      degree: "Master's Degree, Computer Science",
      school: "Harvard University",
      period: "May 2019 – May 2021",
      location: "Remote",
    },
    {
      degree: "Bachelor's Degree, Business",
      school: "Oklahoma State University",
      period: "August 2015 – May 2019",
      location: "Stillwater, OK",
    },
  ];

  const certifications = [
    {
      name: "Credential of Leadership, Impact, and Management in Business",
      issuer: "Harvard Business School Online",
      date: "April 2025",
      description:
        "Rigorous program covering team leadership, business strategy, digital transformation, and organizational impact. Cohort-based learning guided by Harvard faculty.",
    },
    {
      name: "Certificate of Specialization in Digital Transformation and AI",
      issuer: "",
      date: "June 2025",
      description:
        "Focused on leading large-scale organizational AI implementation and digital initiative transformation.",
    },
    {
      name: "AI for Leaders",
      issuer: "",
      date: "October 2025",
      description: "Developing leaders to specialize in AI-driven systems and change management.",
    },
  ];

  const skills = {
    "AI & Machine Learning": {
      items: [
        "Claude, Microsoft Copilot, Cursor, ChatGPT/OpenAI API",
        "TensorFlow, PyTorch",
        "LLMs (95%), Prompt Engineering (95%), AI Agents (90%)",
        "Generative AI, MLOps",
      ],
    },
    Development: {
      items: ["Python, JavaScript", "Full-stack development", "AI application architecture"],
    },
    "Automation & Integration": {
      items: [
        "n8n, workflow process automation",
        "AI orchestrations",
        "API integrations",
        "Production workflow systems",
      ],
    },
    "Enterprise & Cloud": {
      items: [
        "Databricks, Salesforce Cloud, ServiceNow",
        "Cloud architecture",
        "Enterprise software implementation",
      ],
    },
    "Data & Analytics": {
      items: [
        "Power BI, data analytics tools",
        "Data visualization",
        "ML libraries implementation",
        "Large-scale data processing",
      ],
    },
    "Leadership & Management": {
      items: [
        "Stakeholder management",
        "Cross-functional team management",
        "Change management",
        "Agile methodologies",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 -right-4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Interactive Gradient Orb */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(153, 233, 242, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <div className="container relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              AI Solutions Manager | Enterprise Implementation | ML Systems
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I've trained{" "}
            </motion.span>
            <motion.span
              className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                textShadow: "0 0 80px rgba(153, 233, 242, 0.5), 0 0 120px rgba(162, 80, 255, 0.3)",
              }}
            >
              2,000+ people
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              to actually use AI
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Building bridges between technical possibilities and business operations.
          </motion.p>

          {/* Credentials Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/5">
              <GraduationCap className="w-4 h-4 mr-2" />
              Harvard CS Master's
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-accent/50 bg-accent/5">
              1,000+ employees deployed
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/5">
              85% adoption rate
            </Badge>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary transition-all duration-300"
                onClick={() =>
                  (window.location.href = "mailto:nickcprince@gmail.com?subject=Let's Talk AI")
                }
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="relative border-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-glow-cyan backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Nick Prince
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I lead enterprise AI transformation at Life.Church, where I've implemented Claude, Copilot,
                Cursor, and custom AI systems across 1,000+ staff members. In my first quarter, I achieved 85%
                adoption through the AI Resource & Learning Hub I designed and launched. I've personally trained
                over 2,000 individuals—from complete AI beginners to teams with deeply integrated workflows—through
                one-on-ones, workshops, and keynote sessions.
              </p>
              <p>
                Before this role, I founded Navis.Digital, an AI consultancy where I led engineers, ML
                researchers, and automation specialists in delivering AI implementations for businesses. I also
                built Forgeflow AI, a low/no-code platform that enabled thousands to build and deploy AI
                applications.
              </p>
              <p>
                My background combines technical depth (Harvard CS, full-stack development, ML frameworks) with
                proven ability to drive adoption at scale. I've also built social media properties reaching 11.3
                million followers, with features in Huffington Post, BuzzFeed, ABC News, and The Ellen
                Show—demonstrating I understand how to make technology accessible and engaging.
              </p>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan group">
                    <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-6 bg-secondary/30 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Core capabilities at the intersection of technical implementation and organizational transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-glow-primary group">
                    <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world AI implementations with measurable impact
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground ml-5">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        What I Built
                      </h4>
                      <ul className="ml-5 space-y-2">
                        {project.built.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        Results
                      </h4>
                      <ul className="ml-5 space-y-2">
                        {project.results.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <TrendingUp className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-secondary/30 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                      <p className="text-xl text-primary mb-2">{job.company}</p>
                    </div>
                    <div className="text-muted-foreground md:text-right">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                  {job.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start mb-3">
                      <GraduationCap className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-primary mb-1">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.period} | {edu.location}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start mb-3">
                      <Award className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                        {cert.issuer && (
                          <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                        )}
                        <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 px-6 bg-secondary/30 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, { items }], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Me Different Section */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              What Makes Me Different
            </h2>
          </motion.div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/50 to-secondary/50 backdrop-blur-sm border-primary/30">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">The Gap I Fill</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most AI professionals fall into one of two categories:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-background/50 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-primary">Technical specialists</span> who can build
                    models but struggle to drive organizational adoption
                  </p>
                </div>
                <div className="p-6 bg-background/50 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-accent">Strategy consultants</span> who can pitch AI
                    but can't implement it
                  </p>
                </div>
              </div>
              <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                I do both. That combination is rare.
              </p>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="text-2xl font-bold mb-6">Proof Points</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Technical Depth</p>
                      <p className="text-sm text-muted-foreground">
                        Harvard CS, TensorFlow/PyTorch, full-stack AI development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Implementation Experience</p>
                      <p className="text-sm text-muted-foreground">
                        1,000+ employees, multiple platforms, custom AI agents
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Training Capability</p>
                      <p className="text-sm text-muted-foreground">
                        2,000+ individuals, 85% adoption, keynote to 1:1 formats
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Entrepreneurship</p>
                      <p className="text-sm text-muted-foreground">
                        Founded 2 AI companies, led engineering teams
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Audience Understanding</p>
                      <p className="text-sm text-muted-foreground">
                        11.3M followers, major media features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Let's Talk About AI Transformation
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm looking for AI implementation, strategy, or engineering roles where I can drive
              transformation at scale. Willing to relocate anywhere. Authorized to work in the US for any
              employer.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary transition-all duration-300"
                  onClick={() =>
                    (window.location.href = "mailto:nickcprince@gmail.com?subject=Let's Talk AI")
                  }
                >
                  <span className="relative z-10 flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-glow-cyan backdrop-blur-sm transition-all duration-300"
                  onClick={() => window.open("tel:+14055505680", "_self")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +1 405 550 5680
                </Button>
              </motion.div>
            </div>

            <Separator className="my-12" />

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="https://linkedin.com/in/nickcprince"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/navis-dgtl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </motion.a>
              <motion.a
                href="https://instagram.com/nickcprince"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Instagram
              </motion.a>
              <motion.a
                href="https://navis.digital"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Website
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/10">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Nick Prince. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
