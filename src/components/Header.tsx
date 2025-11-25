import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage, type Language } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [showLang, setShowLang] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/src/assets/MonogramaBranco.png"
      : "/src/assets/MonogramaPreto.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["#inicio", "#sobre", "#projetos", "#contato"];

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.querySelector<HTMLElement>(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.contact, href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        {/* linha única: logo | nav desktop | controles */}
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
              <img
                src={logoSrc}
                alt="Logo João Victor Alves"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Navegação centralizada (desktop) */}
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

          {/* Controles: tema, idioma, menu mobile */}
          <div className="flex items-center gap-1">
            {/* Tema */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:ring-primary"
                  onClick={toggleTheme}
                  aria-label="Alternar tema"
                >
                  {theme === "dark" ? <Sun size={32} /> : <Moon size={32} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Alternar tema</TooltipContent>
            </Tooltip>

            {/* Idioma */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-foreground hover:bg-muted hover:text-primary focus-visible:ring-primary"
                    onClick={() => setShowLang((v) => !v)}
                    aria-label="Selecionar idioma"
                    aria-expanded={showLang}
                  >
                    <Languages size={32} />
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

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-muted hover:text-primary focus-visible:ring-primary"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Drawer mobile vindo da direita */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fechar menu"
          />
          {/* painel */}
          <div className="absolute right-0 top-0 h-full w-1/2 min-w-[230px] max-w-xs bg-background border-l border-border shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="text-sm font-semibold text-muted-foreground">
                Menu
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={22} />
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
