import { Github, Linkedin, Instagram, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const technologies = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/alvesjaov", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alvesjaov", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/alvesjaov", label: "Instagram" },
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-up">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            João Victor Alves
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin size={18} />
            <span>Brumado, Bahia - Brasil</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon size={20} />
                </a>
              </Button>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-12">
            <p className="text-sm font-medium text-muted-foreground mb-6">Tecnologias</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="text-4xl transform transition-transform group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
