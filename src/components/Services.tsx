import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cloud, 
  Smartphone, 
  Shield, 
  Target,
  ArrowRight
} from "lucide-react";
import { ParticleField } from "@/components/ParticleField";

export const Services = () => {
  const services = [
    {
      icon: Target,
      title: "IT Strategy Consulting",
      description: "Align technology with business goals.",
      details: "Strategic technology roadmaps, digital transformation planning, and IT governance frameworks tailored to your business objectives.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "From predictive analytics to generative AI.",
      details: "Custom AI models, intelligent automation, chatbots, predictive analytics, and integration of cutting-edge AI technologies.",
      color: "accent"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Secure, scalable, and cost-optimized infrastructure.",
      details: "Cloud migration, containerization, CI/CD pipelines, infrastructure as code, and comprehensive DevOps practices.",
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Modern, user-friendly apps for global reach.",
      details: "Responsive web applications, mobile apps, progressive web apps, and e-commerce solutions with modern frameworks.",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced defense solutions.",
      details: "Security audits, penetration testing, compliance frameworks, threat detection, and comprehensive security strategies.",
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Three.js Background */}
      <ParticleField particleCount={100} color={0x10b981} />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/50 text-foreground">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Core Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-glass-border floating-card group cursor-pointer">
              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  service.color === 'primary' ? 'bg-gradient-primary glow-primary' : 'bg-gradient-accent glow-accent'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.color === 'primary' ? 'text-primary-foreground' : 'text-accent-foreground'
                  }`} />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.details}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};