"use client";

import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/lib/i18n";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t.contact.whatsapp.prefill);
  const whatsappHref = `https://wa.me/5577998416546?text=${whatsappMessage}`;

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alvesjaov",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alvesjaov",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/alvesjaov.dev",
    },
  ];

  return (
    <section id="contato" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t.contact.title}</h2>

          <p className="text-muted-foreground mb-12 text-lg">{t.contact.subtitle}</p>

          {/* Cards de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* EMAIL */}
            <Card className="p-6 flex items-start gap-4 hover:shadow-md hover:border-primary/40 transition-all">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{t.contact.email.label}</h3>
                <p className="text-muted-foreground">{t.contact.email.address}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.contact.email.helper}</p>
              </div>
            </Card>

            {/* WHATSAPP */}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-6 flex items-start gap-4 hover:shadow-md hover:border-green-500/40 transition-all cursor-pointer">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-600">
                  <SiWhatsapp size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.contact.whatsapp.label}</h3>
                  <p className="text-muted-foreground">{t.contact.whatsapp.number}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.contact.whatsapp.helper}</p>
                </div>
              </Card>
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">{t.contact.socialsPrompt}</p>

            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors min-w-[180px]"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
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
