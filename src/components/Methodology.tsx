import { Card } from "@/components/ui/card";
import { Search, Layers, Rocket, Repeat } from "lucide-react";

const phases = [
  {
    icon: Search,
    number: "01",
    title: "Analyze",
    description: "Comprehensive assessment of workflows, data architecture, and AI integration points to identify opportunities."
  },
  {
    icon: Layers,
    number: "02",
    title: "Architect",
    description: "Design intelligent interaction systems that enhance human capabilities and seamlessly integrate with existing processes."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Amplify",
    description: "Implement customized AI interfaces and intuitive prompt engineering tailored to your specific needs."
  },
  {
    icon: Repeat,
    number: "04",
    title: "Adapt",
    description: "Continuous evolution based on real-world performance, ensuring sustained value and optimization."
  }
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Proven{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              4-Phase Approach
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every engagement follows our systematic methodology, ensuring practical implementation and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {phase.number}
                </div>
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-secondary/50 border-primary/20 inline-block">
            <p className="text-lg text-muted-foreground max-w-2xl">
              This systematic approach ensures that AI implementation aligns with your goals, 
              integrates smoothly with existing workflows, and delivers sustained business value.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
