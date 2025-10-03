import Link from "next/link";
import { APP_URL } from "@/misc/routes";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-primary flex flex-col md:flex-row items-center justify-between p-10 gap-10 text-white">
      <h2 className="text-center">
        &copy; https://br.heightcomparisonchart.com/ | All Rights Reserved
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        {footerLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Política De Privacidade",
    href: `https://br.heightcomparisonchart.com/politica-de-privacidade/`,
  },
  {
    title: "Termos",
    href: `https://heightcomparisonchart.com/Termos/`,
  },
  {
    title: "Perguntas Frequentes",
    href: `https://heightcomparisonchart.com/Perguntas-Frequentes/`,
  },
  {
    title: "Sitemap",
    href: "https://br.heightcomparisonchart.com/sitemap.xml",
  },
];
