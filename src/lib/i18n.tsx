import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

type NavTranslations = {
  home: string;
  about: string;
  projects: string;
  contact: string;
};

type AboutCard = {
  title: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

type ContactTranslations = {
  title: string;
  subtitle: string;
  email: {
    label: string;
    address: string;
    helper: string;
  };
  whatsapp: {
    label: string;
    number: string;
    helper: string;
    prefill: string;
  };
  socialsPrompt: string;
};

type Translations = {
  languageName: string;
  nav: NavTranslations;
  hero: {
    headline: string;
    highlight: string;
    description: string;
    cta: string;
    location: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    whatIDoTitle: string;
    cards: AboutCard[];
  };
  projects: {
    title: string;
    subtitle: string;
    codeCta: string;
    demoCta: string;
    items: Project[];
  };
  contact: ContactTranslations;
  footer: {
    text: string;
  };
};

export const translations: Record<Language, Translations> = {
  pt: {
    languageName: "Português",
    nav: {
      home: "Início",
      about: "Sobre mim",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      headline: "Conte com meus serviços",
      highlight: "para desenvolvimento de:",
      description:
        "Sites, landing pages, sistemas web e soluções digitais sob medida. Transforme sua ideia em realidade com tecnologia, design e performance.",
      cta: "Entrar em contato",
      location: "Brumado, Bahia - Brasil",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou desenvolvedor full-stack formado em Análise e Desenvolvimento de Sistemas, criando soluções escaláveis e bem estruturadas. No back-end, atuo com C#, .NET e JavaScript/TypeScript, desenvolvendo APIs e integrações seguras e performáticas.",
        "No front-end, trabalho com React e Angular, construindo interfaces modernas, responsivas e focadas em uma experiência fluida. Possuo experiência com PostgreSQL, SQL Server e MongoDB, além de práticas de infraestrutura em AWS para deploy e ambientes de produção.",
        "Meu foco é entregar qualidade, arquitetura limpa e soluções que unam desempenho, organização e impacto real."
      ],
      whatIDoTitle: "O que eu faço",
      cards: [
        {
          title: "Desenvolvimento de interfaces modernas",
          description: "Crio experiências visuais limpas, funcionais e de alto impacto.",
        },
        {
          title: "Criação de landing pages otimizadas",
          description: "Foco em conversão, velocidade e clareza para gerar resultados reais.",
        },
        {
          title: "Integração com APIs",
          description: "Conecto seu projeto a serviços externos com segurança e eficiência.",
        },
        {
          title: "Mobile First",
          description: "Construo interfaces pensando primeiro no smartphone - onde o usuário realmente está.",
        },
        {
          title: "Otimização de performance",
          description: "Reduzo tempo de carregamento e deixo seu site leve como um foguete.",
        },
        {
          title: "Infraestrutura em nuvem",
          description: "Deploy, automação e escalabilidade com práticas modernas de cloud.",
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns dos meus trabalhos recentes",
      codeCta: "Código",
      demoCta: "Demo",
      items: [
        {
          title: "Website Portfólio",
          description:
            "Meu portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Design moderno e responsivo.",
          tags: ["React", "TypeScript", "Tailwind"],
          github: "https://github.com/alvesjaov",
          demo: "https://alvesjaov.vercel.app",
        },
        {
          title: "Plataforma E-commerce",
          description:
            "Plataforma completa com carrinho, pagamentos e painel administrativo para gestão de produtos e pedidos.",
          tags: ["React", "Node.js", "MongoDB"],
          github: "https://github.com/alvesjaov",
          demo: "#",
        },
        {
          title: "Task Manager App",
          description:
            "Aplicativo de gerenciamento de tarefas com autenticação de usuários e sincronização em tempo real.",
          tags: ["React", "Firebase", "CSS"],
          github: "https://github.com/alvesjaov",
          demo: "#",
        },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Tem um projeto em mente? Me chama e vamos conversar.",
      email: {
        label: "Email",
        address: "alvesjaov@gmail.com",
        helper: "Normalmente respondo no mesmo dia útil.",
      },
      whatsapp: {
        label: "WhatsApp",
        number: "(77) 9 9841-6546",
        helper: "Clique para iniciar a conversa.",
        prefill: "Olá João! Estou no seu portfólio e quero saber mais sobre seus serviços.",
      },
      socialsPrompt: "Me acompanha nas redes:",
    },
    footer: {
      text: "© {year} João Victor Alves. Todos os direitos reservados.",
    },
  },
  en: {
    languageName: "English",
    nav: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      headline: "Count on my services",
      highlight: "for development of:",
      description:
        "Websites, landing pages, web systems, and tailor-made digital solutions. Turn your idea into reality with technology, design, and performance.",
      cta: "Get in touch",
      location: "Brumado, Bahia - Brazil",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I am a full-stack developer with a degree in Systems Analysis, creating scalable and well-structured solutions. On the back end, I work with C#, .NET, and JavaScript/TypeScript, building secure and high-performance APIs and integrations.",
        "On the front end, I use React and Angular to build modern, responsive interfaces focused on smooth user experience. I have experience with PostgreSQL, SQL Server, and MongoDB, as well as AWS infrastructure for deployment and production environments.",
        "My focus is to deliver quality, clean architecture, and solutions that combine performance, organization, and real impact."
      ],
      whatIDoTitle: "What I do",
      cards: [
        {
          title: "Modern interface development",
          description: "I build clean, functional, high-impact visual experiences.",
        },
        {
          title: "Optimized landing pages",
          description: "Focus on conversion, speed, and clarity to drive real results.",
        },
        {
          title: "API integrations",
          description: "I connect your project to external services with security and efficiency.",
        },
        {
          title: "Mobile First",
          description: "Interfaces planned for smartphones first - where users really are.",
        },
        {
          title: "Performance optimization",
          description: "I cut load times and keep your site as light as a rocket.",
        },
        {
          title: "Cloud infrastructure",
          description: "Deploy, automation, and scalability with modern cloud practices.",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my recent work",
      codeCta: "Code",
      demoCta: "Demo",
      items: [
        {
          title: "Portfolio Website",
          description:
            "My personal portfolio built with React, TypeScript, and Tailwind CSS. Modern and responsive design.",
          tags: ["React", "TypeScript", "Tailwind"],
          github: "https://github.com/alvesjaov",
          demo: "https://alvesjaov.vercel.app",
        },
        {
          title: "E-commerce Platform",
          description:
            "Complete platform with cart, payments, and an admin panel to manage products and orders.",
          tags: ["React", "Node.js", "MongoDB"],
          github: "https://github.com/alvesjaov",
          demo: "#",
        },
        {
          title: "Task Manager App",
          description:
            "Task management app with user authentication and real-time synchronization.",
          tags: ["React", "Firebase", "CSS"],
          github: "https://github.com/alvesjaov",
          demo: "#",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Got a project in mind? Reach out and let's talk.",
      email: {
        label: "Email",
        address: "alvesjaov@gmail.com",
        helper: "I usually reply on the same day.",
      },
      whatsapp: {
        label: "WhatsApp",
        number: "+55 77 99841-6546",
        helper: "Click to start the chat.",
        prefill: "Hi João! I'm on your portfolio and want to know more about your services.",
      },
      socialsPrompt: "Follow me on social media:",
    },
    footer: {
      text: "© {year} João Victor Alves. All rights reserved.",
    },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("language");
  if (stored === "pt" || stored === "en") return stored;
  return "pt";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
