"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission - REPLACE WITH: your actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Message sent! (Replace this with actual form handling)");
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have a project in mind or need IT support? I&apos;d love to hear
            from you. Fill out the form below or reach out through social media.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel space-y-6 rounded-2xl p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card/80"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or how I can help..."
                  rows={6}
                  required
                  className="bg-card/80 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Or connect with me on
            </h3>
            <div className="space-y-4">
              <a
                href="https://github.com/tukuf" // REPLACE WITH: your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel flex items-center gap-4 rounded-xl p-4 hover:border-primary/60 hover:bg-accent/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">
                    {/* REPLACE WITH: your GitHub username */}
                    @tukuf
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/tukuf" // REPLACE WITH: your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel flex items-center gap-4 rounded-xl p-4 hover:border-primary/60 hover:bg-accent/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    {/* REPLACE WITH: your LinkedIn name */}
                    tukuf_jr
                  </p>
                </div>
              </a>

              <a
                href="othmanbeyy@email.com" // REPLACE WITH: your email
                className="glass-panel flex items-center gap-4 rounded-xl p-4 hover:border-primary/60 hover:bg-accent/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    {/* REPLACE WITH: your email */}
                    othmanbeyy@email.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
