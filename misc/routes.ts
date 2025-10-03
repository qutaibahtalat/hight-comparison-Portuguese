export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://br.heightcomparisonchart.com";

type link = {
  title: string;
  path: string;
  showInNav: boolean;
  target?: "_blank" | "_self";
};
export const routes: Record<string, link> = {
  home: {
    title: "Comparação De Altura",
    path: "/",
    showInNav: true,
  },

  about: {
    title: "Sobre nós",
    path: "/sobre-nos/",
    showInNav: true,
  },
  contact: {
    title: "Contato",
    path: "/contato/",
    showInNav: true,
  },
  faq: {
    title: "Perguntas Frequentes",
    path: "https://heightcomparisonchart.com/Perguntas-Frequentes/",
    showInNav: false,
  },
  privacy: {
    title: "Política De Privacidade",
    path: "/politica-de-privacidade/",
    showInNav: false,
  },
  terms: {
    title: "Termos",
    path: "https://heightcomparisonchart.com/Termos/",
    showInNav: false,
  },
  blog: {
    title: "Blog",
    path: "https://guides.heightcomparisonchart.com/",
    showInNav: true,
    target: "_blank",
  },
};
