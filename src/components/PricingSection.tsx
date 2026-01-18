import { Check, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "BASIC",
    price: "29",
    description: "Perfect for startups and small businesses launching their first site.",
    icon: Zap,
    features: [
      "Up to 5 pages",
      "Drag & drop builder",
      "SSL certificate included",
      "Custom domain",
      "Basic templates (50+)",
      "Email support",
      "10GB storage",
      "Unlimited bandwidth",
    ],
    popular: false,
  },
  {
    name: "PREMIUM",
    price: "79",
    description: "For growing businesses that demand speed, scale, and serious power.",
    icon: Crown,
    features: [
      "Unlimited pages",
      "Advanced builder + code editor",
      "Priority SSL & CDN",
      "Multiple custom domains",
      "Premium templates (500+)",
      "24/7 priority support",
      "100GB storage",
      "API access & integrations",
      "Analytics dashboard",
      "Automatic backups",
    ],
    popular: true,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-neon/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-neon/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-neon/10 text-neon border border-neon/30 mb-6">
            PRICING
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple Pricing.
            <span className="text-gradient-neon"> Serious Value.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Choose your plan and start building today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground neon-border"
                  : "bg-background border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-neon text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex w-14 h-14 rounded-xl items-center justify-center mb-4 ${
                  plan.popular ? "bg-neon/20" : "gradient-neon"
                }`}>
                  <plan.icon className={`w-7 h-7 ${plan.popular ? "text-neon" : "text-primary"}`} />
                </div>
                <h3 className="font-display text-xl font-bold tracking-wider mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-display font-bold">
                    ${plan.price}
                  </span>
                  <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    /month
                  </span>
                </div>
                <p className={`mt-3 text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-neon/20" : "bg-neon/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-neon" : "text-neon"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : ""}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "neonDark" : "neon"}
                className="w-full"
                size="lg"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ✓ 14-day money-back guarantee &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp;|&nbsp;&nbsp; ✓ No setup fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
