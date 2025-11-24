const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} João Victor Alves. Todos os direitos reservados.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ usando React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
