import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Meu portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Design moderno e responsivo.",
      tags: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/alvesjaov",
      demo: "https://alvesjaov.vercel.app",
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamentos e painel administrativo.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/alvesjaov",
      demo: "#",
    },
    {
      title: "Task Manager App",
      description: "Aplicativo de gerenciamento de tarefas com autenticação de usuários e sincronização em tempo real.",
      tags: ["React", "Firebase", "CSS"],
      github: "https://github.com/alvesjaov",
      demo: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Projetos</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Alguns dos meus trabalhos recentes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
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
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
