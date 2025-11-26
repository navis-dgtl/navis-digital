import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import worldMap from "@/assets/world-map.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Simple dark background - NO glowing orbs */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Subtle world map background */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.08]"
        style={{ backgroundImage: `url(${worldMap})` }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
        {/* Simple badge - no sparkles, subtle border */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-8">
          <span className="text-sm text-muted-foreground">AI Implementation & Strategy Consultancy</span>
        </div>

        {/* Clean heading - NO gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
          Transform AI Potential Into{" "}
          <span className="text-primary">Measurable Results</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Bridge the gap between AI capabilities and business outcomes with expert prompt engineering, 
          implementation strategy, and adoption training.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToServices}
          >
            Explore Services
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
