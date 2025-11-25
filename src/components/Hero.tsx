import { Github, Instagram, Linkedin, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

// IMPORTAÇÕES CORRETAS DAS LOGOS
import MonogramaNomeBranco from "@/assets/MonogramaNomeBranco.png";
import MonogramaNomePreto from "@/assets/MonogramaNomePreto.png";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const heroLogo = isDark ? MonogramaNomeBranco : MonogramaNomePreto;

  const heroBackground = isDark
    ? "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(120,0,255,0.22) 0%, transparent 80%), radial-gradient(ellipse 60% 40% at 30% 70%, rgba(0,160,255,0.22) 0%, transparent 80%), linear-gradient(135deg, #0c0f1d 0%, #0a0816 52%, #0b1224 100%)"
    : "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(120,0,255,0.08) 0%, transparent 80%), radial-gradient(ellipse 60% 40% at 30% 70%, rgba(0,180,255,0.10) 0%, transparent 80%), linear-gradient(180deg, #ffffff 0%, #f8f7ff 100%)";

  return (
    <section
      id="inicio"
      className="relative overflow-visible min-h-[90vh] flex items-center justify-center pt-24 px-2 sm:pt-28 sm:px-4 bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0 animate-hero-bg"
        style={{ background: heroBackground }}
      />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="animate-fade-up">
          <div className="mb-8 flex justify-center">
            <img
              src={heroLogo}
              alt="Logo João Victor Alves"
              className="h-24 w-auto drop-shadow-md"
              draggable={false}
            />
          </div>

          <div className="text-center mt-12 mb-8">
            <h2 className="font-black text-foreground leading-snug">
              <span className="block text-[clamp(1.5rem,3.6vw,2.3rem)]">
                {t.hero.headline}
              </span>
              <span className="block brand-gradient-text text-[clamp(1.4rem,3.4vw,2.2rem)]">
                {t.hero.highlight}
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-bold shadow-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              asChild
            >
              <a href="#contato">{t.hero.cta}</a>
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-base">
              <MapPin size={18} />
              <span>{t.hero.location}</span>
            </div>

            <div className="relative z-20 flex gap-3 mt-2 mb-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/alvesjaov"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://linkedin.com/in/alvesjaov"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">LinkedIn</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://instagram.com/alvesjaov.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-primary transition-colors"
                  >
                    <Instagram size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">Instagram</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
