import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const services = [
    "IT Strategy Consulting",
    "AI & ML Solutions",
    "Cloud & DevOps",
    "Web Development",
    "Cybersecurity"
  ];

  const technologies = [
    "Python & TensorFlow",
    "React & Next.js",
    "AWS & Azure",
    "Docker & Kubernetes",
    "PostgreSQL & MongoDB"
  ];

  return (
    <footer className="bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-accent rounded-full blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">Paramarsh.ai</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering businesses with intelligent IT consulting and AI solutions. 
                Innovation, transparency, and client success drive everything we do.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  contact@paramarsh.ai
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  +91-XXXXXXXXXX
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Remote First – Global
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient-accent">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient-accent">Technologies</h3>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={index}>
                    <a 
                      href="#tech"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {tech}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gradient-primary">Ready to Start?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transform your business with our expert IT consulting and AI solutions.
              </p>
              <div className="space-y-3">
                <Button variant="hero" size="sm" className="w-full">
                  Get Started Today
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Paramarsh.ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};