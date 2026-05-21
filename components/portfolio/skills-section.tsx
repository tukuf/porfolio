"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Database,
  Cpu,
  Network,
  Monitor,
  Wrench,
  Shield,
  Headphones,
  Terminal,
  GitBranch,
  Container,
  FileCode,
} from "lucide-react";

const softwareSkills = [
  { name: "Django", icon: FileCode, level: 90 },
  { name: "React", icon: Code2, level: 88 },
  { name: "PostgreSQL", icon: Database, level: 85 },
  { name: "Python", icon: Terminal, level: 92 },
  { name: "JavaScript", icon: Code2, level: 88 },
  { name: "Tailwind CSS", icon: FileCode, level: 90 },
  { name: "Docker", icon: Container, level: 75 },
  { name: "Git", icon: GitBranch, level: 88 },
];

const hardwareSkills = [
  { name: "PC Assembly", icon: Cpu, level: 95 },
  { name: "Hardware Troubleshooting", icon: Wrench, level: 92 },
  { name: "Network Setup", icon: Network, level: 85 },
  { name: "Windows/Linux OS", icon: Monitor, level: 90 },
  { name: "Virus Removal", icon: Shield, level: 88 },
  { name: "Remote Support", icon: Headphones, level: 90 },
];

function SkillCard({
  skill,
}: {
  skill: { name: string; icon: React.ComponentType<{ className?: string }>; level: number };
}) {
  const Icon = skill.icon;
  return (
    <div className="group glass-panel rounded-xl p-5 hover:border-primary/60 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{skill.name}</h3>
          <p className="text-sm text-muted-foreground">{skill.level}% proficiency</p>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-2 rounded-full shadow-[0_0_18px_var(--primary)] transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="tech-band py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-3">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Skills &amp; Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A unique blend of software engineering and IT hardware expertise,
            allowing me to tackle challenges across the full technology stack.
          </p>
        </div>

        <Tabs defaultValue="software" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="software" className="text-sm sm:text-base">
              <Code2 className="w-4 h-4 mr-2" />
              Software Engineering
            </TabsTrigger>
            <TabsTrigger value="hardware" className="text-sm sm:text-base">
              <Cpu className="w-4 h-4 mr-2" />
              IT &amp; Hardware Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software">
            <div className="grid sm:grid-cols-2 gap-4">
              {softwareSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hardware">
            <div className="grid sm:grid-cols-2 gap-4">
              {hardwareSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
