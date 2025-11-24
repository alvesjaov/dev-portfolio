import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "joaovictor@email.com",
      href: "mailto:joaovictor@email.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Brumado, Bahia - Brasil",
      href: "https://maps.app.goo.gl/dFtgyrxJ11iww1k69",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alvesjaov",
      color: "hover:text-[#333]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alvesjaov",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/alvesjaov",
      color: "hover:text-[#E4405F]",
    },
  ];

  return (
    <section id="contato" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contato</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Vamos trabalhar juntos? Entre em contato!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item) => (
              <Card key={item.label} className="p-6 hover:shadow-md transition-shadow">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">Siga-me nas redes sociais</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className={`rounded-full ${social.color} transition-colors`}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="mr-2" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
