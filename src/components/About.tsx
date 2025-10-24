import { Card } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bridging AI Capabilities With{" "}
              <span className="text-primary">Business Needs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Navis is a specialized AI consultancy focused on helping organizations implement AI solutions 
              that deliver practical business results. We position ourselves as the bridge between technical 
              AI capabilities and operational business needs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our unique value proposition centers on transforming AI potential into measurable business outcomes. 
              Our approach is tailored to create seamless connections between AI capabilities and human workflows.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 bg-card border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Transform AI potential into measurable business outcomes through practical implementation 
                    and behavioral change.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep technical knowledge in LLMs, prompt engineering (95% proficiency), AI agents (90% proficiency), 
                    and process automation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Specialty</h3>
                  <p className="text-muted-foreground">
                    Specialized experience with faith-based organizations and non-profits, understanding unique 
                    mission-aligned requirements.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
