import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    category: "Enterprise Implementation",
    title: "Marketing Team AI Transformation",
    description:
      "Helped a mid-sized marketing department reduce content creation time by 60% through custom prompt engineering and workflow optimization.",
    results: ["60% faster content creation", "95% team adoption rate", "3-month ROI achievement"],
    industry: "Marketing & Advertising",
  },
  {
    icon: Users,
    category: "Non-Profit Success",
    title: "Non-Profit Organization Efficiency",
    description:
      "Implemented and trained various AI solutions for a non-profit to streamline volunteer coordination and communication, enhancing mission impact.",
    results: ["40% administrative time saved", "2x volunteer engagement", "Mission-aligned implementation"],
    industry: "Non-Profit",
  },
  {
    icon: Zap,
    category: "Training & Adoption",
    title: "Enterprise-Wide AI Adoption Program",
    description:
      "Delivered comprehensive training program for 1,200+ employees, establishing internal AI capabilities and best practices.",
    results: ["85% employee confidence", "Custom prompt library created", "Ongoing adoption support"],
    industry: "Technology Services",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Impact, <span className="bg-gradient-primary bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how organizations transform their operations with our AI implementation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm text-primary mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>

                <div className="space-y-2 mb-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{study.industry}</span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            These are representative examples. Actual results vary based on organization size, commitment, and
            implementation scope.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
