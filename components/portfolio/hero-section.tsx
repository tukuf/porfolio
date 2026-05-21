import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 lg:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="inline-flex items-center rounded-full border border-primary/30 bg-card/60 px-4 py-2 text-primary font-medium mb-4 tracking-wide backdrop-blur">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              {/* REPLACE WITH: Your Name */}
              Hi, I&apos;m <span className="text-primary">Ashraf Othman</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
              Full-Stack Developer &amp; IT Specialist
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              I build scalable web apps with Django/React and ensure hardware
              reliability with expert PC maintenance. Bridging the gap between
              software innovation and hardware reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-2xl" />
              <div className="absolute -inset-3 rounded-[1.6rem] border border-primary/30" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-card shadow-2xl">
                {/* REPLACE WITH: my-photo.jpg */}
                <img
                  src="tukuf hair(1).png"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-card/90 px-4 py-2 rounded-full shadow-lg border border-border backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">
                    Available for hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
