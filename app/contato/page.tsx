import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Se você tiver perguntas, dúvidas, sugestões ou comentários, não hesite em nos enviar uma mensagem para heightcomparisonchart@gmail.com",
};

export default function ContactPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-6 lg:px-12 py-10 space-y-4">
      <h1 className="text-3xl font-extrabold text-gray-900">Contate-nos</h1>
      <p>
        Se você tiver perguntas, dúvidas, sugestões ou comentários, não hesite em
        nos enviar uma mensagem para <a className="text-primary underline" href="mailto:heightcomparisonchart@gmail.com">heightcomparisonchart@gmail.com</a>.
      </p>
    </main>
  );
}
