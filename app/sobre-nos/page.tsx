import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Bem-vindo ao br.heightComparisonChart.com! Estamos aqui para ajudar você a comparar alturas de forma fácil.",
};

export default function AboutPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-6 lg:px-12 py-10 space-y-4">
      <h1 className="text-3xl font-extrabold text-gray-900">Sobre Nós</h1>
      <p>
        Bem-vindo ao br.heightComparisonChart.com! Estamos aqui para ajudar você a
        comparar alturas de forma fácil.
      </p>
      <h2 className="text-xl font-bold mt-6">Quem Somos</h2>
      <p>
        Nosso site é uma ferramenta simples e divertida que mostra as diferenças de
        altura entre as pessoas. Você pode usá-lo para comparar sua altura com
        amigos, familiares ou pessoas famosas. Nós tornamos tudo fácil de entender!
      </p>
      <h2 className="text-xl font-bold mt-6">O Que Fazemos</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Mostramos quão alto você é em comparação com outras pessoas.</li>
        <li>Criamos um gráfico claro para você ver a diferença.</li>
        <li>
          Você pode comparar duas pessoas, um grupo ou até sua altura com a média.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6">Por Que Usar Nossa Ferramenta?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Fácil de Usar:</strong> Basta inserir as alturas e ver o resultado.</li>
        <li>
          <strong>Divertida e Útil:</strong> Descubra como sua altura se compara com a de
          outras pessoas.
        </li>
        <li><strong>Gratuita para Todos:</strong> Sem custo, use quando quiser!</li>
      </ul>
      <h2 className="text-xl font-bold mt-6">Nosso Objetivo</h2>
      <p>
        Queremos ajudar as pessoas a aprenderem sobre altura de um jeito simples.
        Muitas pessoas têm curiosidade sobre como sua altura se compara com a de
        outras. Com nossa ferramenta, você pode descobrir isso rapidamente!
      </p>
      <p className="mt-4">Experimente agora e divirta-se comparando alturas!</p>
    </main>
  );
}
