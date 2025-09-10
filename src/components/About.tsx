import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Lightbulb, Shield, Users } from "lucide-react";
import { FloatingTech } from "@/components/FloatingTech";

export const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that push boundaries."
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Open communication and honest partnerships are the foundation of our relationships."
    },
    {
      icon: Users,
      title: "Client Success at the Core",
      description: "Your success is our success. We're committed to delivering measurable results."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Three.js Background Elements */}
      <FloatingTech />
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-mesh rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/50 text-foreground">About Paramarsh.ai</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Who We Are</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Paramarsh.ai is a next-generation IT consulting and AI solutions company, founded with the vision 
            to simplify technology adoption for businesses of all sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-gradient-primary">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with intelligent, scalable, and secure solutions tailored to their unique challenges.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-gradient-accent">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bring together expertise in Artificial Intelligence, Cloud Computing, DevOps, and Modern Web Development 
                to help enterprises stay ahead in a fast-changing digital world.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-2xl floating-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center glow-accent">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Values</h3>
              </div>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};