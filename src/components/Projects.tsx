import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const { t } = useLanguage();
  const underConstruction = true;

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t.projects.title}</h2>
          <p className="text-muted-foreground mb-12 text-lg">{t.projects.subtitle}</p>

          {underConstruction ? (
            <Card className="relative overflow-hidden border border-[hsl(var(--brand-deep)/0.25)] bg-gradient-to-br from-primary/5 via-accent/5 to-background">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl" aria-hidden="true" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">{t.projects.placeholderTitle}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {t.projects.placeholderDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3">
                <div className="flex items-center gap-3 text-primary font-semibold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="text-sm">{t.projects.placeholderStatus}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t.projects.placeholderNote}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Projeto cards originais mantidos para reativação futura */}
              {t.projects.items.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[hsl(var(--brand-deep)/0.25)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[hsl(var(--accent))] text-foreground hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-colors"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        {t.projects.codeCta}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 shadow-[0_12px_32px_-18px_hsl(var(--primary)/0.7)] hover:shadow-[0_16px_40px_-18px_hsl(var(--primary)/0.85)] transition-shadow"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        {t.projects.demoCta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          {/* Fim da exibição condicional */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
