import { 
  Rocket, 
  Shield, 
  Zap, 
  Globe, 
  Palette, 
  Headphones,
  Code,
  Cloud
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Instant Deploy",
    description: "Go live in seconds with our one-click deployment. No waiting, no hassle.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Enterprise SSL, DDoS protection, and 24/7 threat monitoring included.",
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description: "Global CDN with edge caching delivers sub-50ms load times worldwide.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Automatically scale across 200+ data centers. Handle any traffic spike.",
  },
  {
    icon: Palette,
    title: "Drag & Drop Builder",
    description: "Visual editor with 500+ templates. Build stunning sites—zero code required.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Full API access, Git integration, and custom code injection when you need it.",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Unlimited bandwidth, automatic backups, and 99.9% uptime guarantee.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Real humans, real fast. Our experts are always ready to help you succeed.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-neon/10 text-neon border border-neon/30 mb-6">
            CAPABILITIES
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built Different.
            <span className="text-gradient-neon"> Built Better.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to dominate the digital landscape. 
            Powerful tools, seamless experience, unmatched reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-neon/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-neon flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
