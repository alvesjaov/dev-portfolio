import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage, type Language } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import MonogramaBranco from "@/assets/MonogramaBranco.png";
import MonogramaPreto from "@/assets/MonogramaPreto.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [showLang, setShowLang] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Correcao da logo do navbar
  const logoSrc = theme === "dark" ? MonogramaBranco : MonogramaPreto;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["#inicio", "#sobre", "#projetos", "#contato"];
    const update = () => {
      const center = window.innerHeight / 2;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.querySelector(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= center && rect.bottom >= center) current = id;
      });

      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.contact, href: "#contato" },
  ];

  // Icon sizes
  const iconSizeClasses = "h-7 w-7 md:h-6 md:w-6";
  const buttonSizeClasses = "h-10 w-10 md:h-10 md:w-10";
  const iconSizeOverride = "[&_svg]:h-6 [&_svg]:w-6 md:[&_svg]:h-6 md:[&_svg]:w-6";

  const menuIconSizeClasses = "h-8 w-8 md:h-7 md:w-7";
  const menuButtonSizeClasses = "h-10 w-10 md:h-10 md:w-10";
  const menuIconOverride = "[&_svg]:h-6 [&_svg]:w-6 md:[&_svg]:h-7 md:[&_svg]:w-7";

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setShowLang(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLang(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border bg-background",
        isScrolled ? "shadow-sm" : "shadow-none"
      )}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <img src={logoSrc} alt="Logo Joao Victor Alves" className="h-8 w-auto" />
            </a>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "text-lg font-bold px-2 py-1 transition-colors",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controles */}
          <div className="flex items-center gap-0.5">
            {/* Desktop only: tema e idioma */}
            <div className="hidden md:flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0",
                      buttonSizeClasses,
                      iconSizeOverride
                    )}
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? (
                      <Sun size={28} className={iconSizeClasses} />
                    ) : (
                      <Moon size={28} className={iconSizeClasses} />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Alternar tema</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0",
                        buttonSizeClasses,
                        iconSizeOverride
                      )}
                      onClick={() => setShowLang((v) => !v)}
                    >
                      <Languages size={28} className={iconSizeClasses} />
                    </Button>

                    {showLang && (
                      <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded shadow z-50">
                        {(["pt", "en"] as Language[]).map((lang) => (
                          <button
                            key={lang}
                            className={cn(
                              "block w-full px-4 py-2 text-left text-sm transition-colors",
                              lang === language
                                ? "bg-primary/10 text-primary font-semibold"
                                : "hover:bg-muted"
                            )}
                            onClick={() => handleLanguageChange(lang)}
                          >
                            {lang === "pt" ? "Português" : "English"}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">Selecionar idioma</TooltipContent>
              </Tooltip>
            </div>

            {/* Botao menu - sempre visivel no mobile */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0",
                menuButtonSizeClasses,
                menuIconOverride
              )}
              onClick={() => {
                setShowLang(false);
                setIsMobileMenuOpen((v) => !v);
              }}
            >
              {isMobileMenuOpen ? (
                <X size={32} className={menuIconSizeClasses} />
              ) : (
                <Menu size={32} className={menuIconSizeClasses} />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Drawer Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-1/2 min-w-[230px] max-w-xs bg-background border-l border-border shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="text-sm font-semibold text-muted-foreground">
                Menu
              </span>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0",
                  menuButtonSizeClasses,
                  menuIconOverride
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} className={menuIconSizeClasses} />
              </Button>
            </div>

            <nav className="flex-1 flex flex-col gap-1 px-3 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors",
                    activeSection === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Rodapé com Tema (ícone) e Idioma (select) empilhados */}
            <div className="mt-auto border-t border-border px-3 py-3 flex flex-col gap-3">
              {/* Tema com nome e ícone à direita */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {theme === "dark" ? t.theme.dark : t.theme.light}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0",
                    buttonSizeClasses,
                    iconSizeOverride
                  )}
                  onClick={toggleTheme}
                  aria-label={language === "pt" ? "Alternar tema" : "Toggle theme"}
                >
                  {theme === "dark" ? (
                    <Sun size={24} className={iconSizeClasses} />
                  ) : (
                    <Moon size={24} className={iconSizeClasses} />
                  )}
                </Button>
              </div>

              {/* Idioma - botões ao lado do nome, alinhados à direita */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {t.languageLabel}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLanguageChange("pt")}
                    className={cn(
                      "h-9 w-9 flex items-center justify-center rounded-full text-l border border-border transition-colors",
                      language === "pt"
                        ? "bg-primary text-primary-foreground border-primary shadow"
                        : "bg-background text-foreground hover:bg-muted"
                    )}
                    aria-label="Português"
                  >
                    PT
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={cn(
                      "h-9 w-9 flex items-center justify-center rounded-full text-l border border-border transition-colors",
                      language === "en"
                        ? "bg-primary text-primary-foreground border-primary shadow"
                        : "bg-background text-foreground hover:bg-muted"
                    )}
                    aria-label="English"
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
