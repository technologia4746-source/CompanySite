import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Cloud } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { ThreeBackground } from "@/components/ThreeBackground";
import { ParticleField } from "@/components/ParticleField";
import { FloatingTech } from "@/components/FloatingTech";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <FloatingTech />
      <ThreeBackground />
      <ParticleField particleCount={150} />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-pulse-soft" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-glass-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Next-Generation IT Solutions</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient-primary">Empowering</span> Businesses
            <br />
            with <span className="text-gradient-accent">Intelligent</span>
            <br />
            IT Consulting & AI Solutions
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At <span className="text-primary font-semibold">Paramarsh.ai</span>, we bridge the gap between technology and strategy — 
            helping you innovate, scale, and succeed in the digital era.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Explore Services
            </Button>
          </div>
          
          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8 pt-12">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <Brain className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">AI Solutions</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <Cloud className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Cloud DevOps</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};