import { Wrench, Network, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "PC Repair & Assembly",
    description:
      "Complete hardware diagnostics, repairs, upgrades, and custom PC builds. From replacing components to building gaming rigs and workstations.",
  },
  {
    icon: Network,
    title: "Network Setup",
    description:
      "Home and small office network configuration, router setup, WiFi optimization, and troubleshooting connectivity issues.",
  },
  {
    icon: Zap,
    title: "System Optimization",
    description:
      "Speed up slow computers, remove malware, clean up storage, optimize startup, and enhance overall system performance.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="tech-band py-20 lg:py-28 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-3">IT Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Hardware &amp; Support Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beyond software development, I offer hands-on IT support services to
            keep your systems running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group glass-panel rounded-2xl p-8 text-center hover:border-primary/60 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
