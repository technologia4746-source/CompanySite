import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingTech } from "@/components/FloatingTech";

export const Technologies = () => {
  const techCategories = [
    {
      category: "AI/ML",
      color: "accent",
      technologies: ["Python", "TensorFlow", "OpenAI APIs", "PyTorch", "Scikit-learn"]
    },
    {
      category: "Cloud Platforms",
      color: "primary",
      technologies: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Vercel"]
    },
    {
      category: "Web Development",
      color: "accent",
      technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Mobile Apps",
      color: "primary",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Expo"]
    },
    {
      category: "Databases",
      color: "accent",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "CosmosDB", "Redis"]
    },
    {
      category: "DevOps",
      color: "primary",
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Jenkins"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Three.js Background */}
      <FloatingTech />
      
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-mesh rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-accent rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/50 text-foreground">Technologies</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">We Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks to build robust, scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="glass-card border-glass-border floating-card">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    category.color === 'primary' 
                      ? 'bg-gradient-primary text-primary-foreground' 
                      : 'bg-gradient-accent text-accent-foreground'
                  }`}>
                    {category.category}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tech Highlights */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
              Always Learning, Always Innovating
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team continuously explores emerging technologies and best practices to ensure 
              we deliver solutions using the most effective and modern tools available. 
              From quantum computing to edge AI, we stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};