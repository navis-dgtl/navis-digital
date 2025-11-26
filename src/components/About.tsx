import { Card } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "95%", label: "Prompt Engineering Proficiency" },
  { value: "90%", label: "AI Agents Expertise" },
  { value: "100%", label: "Client Satisfaction" }
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Bridging AI Capabilities With{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                  Business Needs
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Navis is a specialized AI consultancy focused on helping organizations implement AI solutions
              that deliver practical business results. We position ourselves as the bridge between technical
              AI capabilities and operational business needs.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our unique value proposition centers on transforming AI potential into measurable business outcomes.
              Our approach is tailored to create seamless connections between AI capabilities and human workflows.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "Transform AI potential into measurable business outcomes through practical implementation and behavioral change.",
                gradient: "from-cyan-500/10 to-primary/10"
              },
              {
                icon: Award,
                title: "Our Expertise",
                description: "Deep technical knowledge in LLMs, prompt engineering (95% proficiency), AI agents (90% proficiency), and process automation.",
                gradient: "from-primary/10 to-accent/10"
              },
              {
                icon: Users,
                title: "Our Specialty",
                description: "Specialized experience with faith-based organizations and non-profits, understanding unique mission-aligned requirements.",
                gradient: "from-accent/10 to-purple-500/10"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:-translate-x-2">
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative flex items-start gap-4 z-10">
                      <motion.div
                        className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl backdrop-blur-sm flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom gradient accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
