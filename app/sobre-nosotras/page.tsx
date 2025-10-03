import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotras",
  description: "Aprende más sobre HeightComparisonChart.com",
};

function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Sobre nosotras
        </h1>

        <p className="text-gray-700 mb-6">
          Bienvenido a <span className="font-semibold">HeightComparisonChart.com</span>, el destino en línea definitivo para comparar las alturas de personas, animales, objetos y personajes de todo tipo. Ya sea que tengas curiosidad por saber cuánto mide una celebridad famosa en comparación con un Pokémon o quieras ver cómo los edificios más altos del mundo se comparan con objetos cotidianos, has llegado al lugar indicado.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-gray-600">
            Nuestra misión es ofrecer una herramienta divertida, informativa y fácil de usar que permita a los visitantes comparar visualmente la altura de una amplia variedad de entidades. Desde los rascacielos más altos hasta los personajes ficticios más queridos, nuestra plataforma da vida a estas comparaciones con visualizaciones atractivas y precisas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Lo Que Ofrecemos
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-4">
              <span className="font-medium">
                Herramienta Interactiva de Comparación de Alturas:
              </span> Usa nuestra herramienta para comparar las alturas de personas (hombres, mujeres y niños), mascotas, edificios, objetos, Pokémon, personajes ficticios y celebridades famosas de todo el mundo.
            </li>
            <li className="mb-4">
              <span className="font-medium">Precisión Visual:</span> Nuestros gráficos comparativos están diseñados para ofrecerte una representación visual clara y precisa, facilitando la comparación entre diferentes entidades.
            </li>
            <li>
              <span className="font-medium">Categorías Diversas:</span> Ya sea que te interese comparar alturas del mundo real o imaginar cómo se mide tu personaje favorito frente a figuras icónicas, nuestras categorías abarcan una amplia gama de intereses.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Nuestra Visión
          </h2>
          <p className="text-gray-600">
            En <span className="font-semibold">HeightComparisonChart.com</span>, creemos que explorar el mundo desde la perspectiva de la altura puede ser una experiencia divertida, educativa e inspiradora. Nos esforzamos por hacer que las comparaciones sean accesibles, entretenidas y visualmente atractivas, despertando la curiosidad y ayudando a los usuarios a obtener una nueva perspectiva sobre la escala del mundo que nos rodea.
          </p>
          <p className="text-gray-600 mt-4">
            Actualizamos nuestro contenido constantemente y añadimos nuevas comparaciones, así que siempre hay algo nuevo por descubrir. Nuestro objetivo es ser tu fuente de referencia para comparar alturas, ya seas un visitante casual o un fanático de alguna de nuestras muchas categorías.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Gracias
          </h2>
          <p className="text-gray-600">
            Gracias por visitar <span className="font-semibold">HeightComparisonChart.com</span>. ¡Esperamos que disfrutes explorando y comparando alturas con nosotros!
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
