import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Globe, Send, MapPin } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Three.js Background */}
      <ParticleField particleCount={80} color={0x8b5cf6} />
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-mesh rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/50 text-foreground">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Let's Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Or want to explore how AI can transform your business?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-glass-border floating-card">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-accent">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your company name"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or requirements..."
                  rows={5}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="hero" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-glass-border floating-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@paramarsh.ai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-glass-border floating-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center glow-accent">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-glass-border floating-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Remote First – Serving Globally</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-gradient-accent">Global Reach</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work with clients worldwide, providing 24/7 support and seamless collaboration 
                across time zones. Our remote-first approach ensures flexibility and efficiency 
                in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};