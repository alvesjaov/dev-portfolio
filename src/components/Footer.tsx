import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.text.replace("{year}", currentYear)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
