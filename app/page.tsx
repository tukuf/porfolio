import { Header } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <div className="tech-page min-h-screen">
      <div className="tech-background" aria-hidden="true">
        <span className="tech-node tech-node-a" />
        <span className="tech-node tech-node-b" />
        <span className="tech-node tech-node-c" />
        <span className="tech-scanline" />
      </div>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
