import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI Implementation & Strategy Consultancy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform AI Potential Into{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Measurable Results
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Bridge the gap between AI capabilities and business outcomes with expert prompt engineering, 
          implementation strategy, and adoption training.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-[var(--glow-primary)] transition-shadow text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            onClick={scrollToServices}
          >
            Explore Services
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-6">Trusted by organizations seeking practical AI solutions</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="text-2xl font-bold">Faith-Based Orgs</div>
            <div className="text-2xl font-bold">Non-Profits</div>
            <div className="text-2xl font-bold">Enterprises</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
