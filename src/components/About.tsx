const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Sobre mim</h2>
          
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Sou um entusiasta da tecnologia, sempre interessado em tudo que envolve o mundo digital. 
              Adoro aprender novas habilidades e me manter atualizado com as últimas tendências e 
              inovações. Como um leitor ávido, acredito que a leitura é uma maneira de expandir meus 
              horizontes e enriquecer minha mente.
            </p>
            
            <p>
              Atualmente, estou aprendendo a me tornar um desenvolvedor full-stack. No front-end, estou 
              me familiarizando com tecnologias como HTML, CSS e JavaScript, além de frameworks modernos 
              como React e TypeScript. No back-end, estou adquirindo experiência com Node.js e bancos de 
              dados. Sempre buscando aprimorar minhas habilidades nessas áreas.
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">O que eu faço</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up">
                  <div className="text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Desenvolvimento de interfaces modernas</h4>
                  <p className="text-muted-foreground text-sm">React, Next.js</p>
                </div>

                <div className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Criação de landing pages otimizadas</h4>
                  <p className="text-muted-foreground text-sm">Design responsivo e conversão</p>
                </div>

                <div className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Integração com APIs</h4>
                  <p className="text-muted-foreground text-sm">Conexão com serviços externos</p>
                </div>

                <div className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                  <div className="text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Otimização de performance</h4>
                  <p className="text-muted-foreground text-sm">Sites rápidos e eficientes</p>
                </div>

                <div className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  <div className="text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">AWS Cloud</h4>
                  <p className="text-muted-foreground text-sm">EC2, RDS, S3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
