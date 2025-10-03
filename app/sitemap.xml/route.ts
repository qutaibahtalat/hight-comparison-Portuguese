import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://br.heightcomparisonchart.com";
  const lastMod = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${baseUrl}/`, priority: 1, changeFreq: "monthly" },
    { loc: `${baseUrl}/sobre-nos/`, priority: 0.8, changeFreq: "yearly" },
    { loc: `${baseUrl}/contato/`, priority: 0.7, changeFreq: "yearly" },
    { loc: `${baseUrl}/politica-de-privacidade/`, priority: 0.6, changeFreq: "yearly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        ({ loc, priority, changeFreq }) =>
          `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>${changeFreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      )
      .join("") +
    "\n</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
