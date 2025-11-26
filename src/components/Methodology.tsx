import { Card } from "@/components/ui/card";
import { Search, Layers, Rocket, Repeat } from "lucide-react";
import { motion } from "framer-motion";

const phases = [
  {
    icon: Search,
    number: "01",
    title: "Analyze",
    description: "Comprehensive assessment of workflows, data architecture, and AI integration points to identify opportunities.",
    color: "from-cyan-500 to-primary"
  },
  {
    icon: Layers,
    number: "02",
    title: "Architect",
    description: "Design intelligent interaction systems that enhance human capabilities and seamlessly integrate with existing processes.",
    color: "from-primary to-accent"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Amplify",
    description: "Implement customized AI interfaces and intuitive prompt engineering tailored to your specific needs.",
    color: "from-accent to-purple-500"
  },
  {
    icon: Repeat,
    number: "04",
    title: "Adapt",
    description: "Continuous evolution based on real-world performance, ensuring sustained value and optimization.",
    color: "from-purple-500 to-primary"
  }
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Proven{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              4-Phase Approach
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every engagement follows our systematic methodology, ensuring practical implementation and measurable results.
          </motion.p>
        </motion.div>

        {/* Desktop Layout with connecting lines */}
        <div className="hidden lg:block relative">
          {/* Animated connecting line */}
          <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 -z-0" style={{ marginTop: "-2rem" }}>
            <motion.path
              d="M 0 0 Q 25 0, 50 0 T 100 0"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(187, 75%, 76%)" stopOpacity="0.5" />
                <stop offset="50%" stopColor="hsl(272, 100%, 65%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(187, 75%, 76%)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-4 gap-6 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="group relative p-8 bg-card/50 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full hover:-translate-y-2">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Large number background */}
                    <motion.div
                      className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500"
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {phase.number}
                    </motion.div>

                    <div className="relative z-10">
                      {/* Icon with animated glow */}
                      <motion.div
                        className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-fit backdrop-blur-sm"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${phase.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative p-8 bg-card/50 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <motion.div
                    className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500"
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {phase.number}
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-fit backdrop-blur-sm"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                    >
                      <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${phase.color}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="relative p-10 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-xl border-2 border-primary/30 inline-block overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-lg text-muted-foreground max-w-3xl relative z-10 leading-relaxed">
              This systematic approach ensures that AI implementation aligns with your goals,
              integrates smoothly with existing workflows, and delivers sustained business value.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
