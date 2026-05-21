import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Business Registration & Mapping System",
    description:
      "Geospatial business registry with dynamic database schemas. Features interactive maps for visualizing business locations with advanced filtering and reporting capabilities.",
    image: "map.png", // REPLACE WITH: project1-maps.jpg
    tech: ["Django", "React", "PostgreSQL", "Google Maps API"],
    liveUrl: "furniture.wuaze.com", // REPLACE WITH: your live URL
    githubUrl: "https://github.com/tukuf", // REPLACE WITH: your GitHub URL
  },
  {
    id: 2,
    title: "Tanzania Tourism Booking Platform",
    description:
      "Safari & Excursion booking engine with multi-step wizard and admin dashboard. Includes payment integration, booking management, and tour operator tools.",
    image: "tour1.png", // REPLACE WITH: project2-tourism.jpg
    tech: ["Django", "React", "PostgreSQL"],
    liveUrl: "https://kivulitoursandsafaris.co.tz/", // REPLACE WITH: your live URL
    githubUrl: "https://github.com/tukuf", // REPLACE WITH: your GitHub URL
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-3">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of my recent work showcasing full-stack development
            capabilities with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group glass-panel overflow-hidden hover:border-primary/60 hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs border border-primary/15">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button asChild size="sm" className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
