import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Brain, RefreshCw, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: Zap,
    title: "Prompt Engineering Essentials",
    description: "Custom-crafted prompts for consistent, high-quality AI outputs. Perfect for teams seeking immediate improvements.",
    features: ["Custom Prompt Development", "Implementation Guide", "Follow-up Consultation"],
    gradient: "from-yellow-500/20 via-primary/20 to-transparent"
  },
  {
    icon: Brain,
    title: "AI Implementation Strategy",
    description: "Comprehensive roadmap from assessment to deployment. Strategic guidance for successful AI integration.",
    features: ["AI Readiness Assessment", "Implementation Roadmap", "3 Consultation Sessions"],
    gradient: "from-accent/20 via-primary/20 to-transparent"
  },
  {
    icon: RefreshCw,
    title: "Prompt Engineering as a Service",
    description: "Ongoing prompt development and optimization. Continuously evolving AI capabilities for your team.",
    features: ["Monthly New Prompts", "Bi-weekly Office Hours", "Performance Analysis"],
    gradient: "from-primary/20 via-accent/20 to-transparent"
  },
  {
    icon: Users,
    title: "AI Training & Adoption",
    description: "Build internal AI capabilities through customized training. Transform your team into confident AI users.",
    features: ["Workplace Assessment", "Tailored AI Training Sessions", "30-Day Support"],
    gradient: "from-cyan-500/20 via-accent/20 to-transparent"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Services Designed For{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Real Results
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From prompt engineering to full AI transformation, we meet you where you are and guide you forward.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card
                  className="group relative p-8 bg-card/50 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full"
                  style={{
                    transform: isHovered ? "translateY(-8px) rotateX(2deg)" : "translateY(0) rotateX(0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon with glow effect */}
                    <motion.div
                      className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-fit backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-muted-foreground flex items-center group/item"
                        >
                          <motion.span
                            className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="w-full bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary hover:to-accent border border-primary/30 hover:border-transparent hover:shadow-glow-primary transition-all duration-300 group/button"
                        onClick={scrollToContact}
                      >
                        <span className="group-hover/button:text-background transition-colors">Learn More</span>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">Need something custom?</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-glow-cyan backdrop-blur-sm transition-all duration-300"
            >
              Discuss Your Needs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
