import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon/5 to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 neon-glow">
              <Zap className="w-4 h-4 text-neon" />
              <span className="text-sm font-medium text-neon">Next-Gen Web Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build the Future.
              <br />
              <span className="text-gradient-neon">Launch Today.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Maverick Systems™ delivers cutting-edge website building and hosting solutions. 
              No code. No limits. Just pure digital power at your fingertips.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div>
                <div className="font-display text-3xl font-bold text-neon">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-neon">&lt;50ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-neon">10K+</div>
                <div className="text-sm text-muted-foreground">Sites Launched</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="neon" size="lg" onClick={scrollToContact}>
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Features
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden neon-border animate-pulse-neon">
              <img
                src={heroImage}
                alt="Futuristic web development interface"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-elevated animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-neon flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Lightning Fast</div>
                  <div className="text-xs text-muted-foreground">Deploy in seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
