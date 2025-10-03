import React from "react";
import type { Metadata } from "next";
import { EMAIL } from "@/misc/data";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "non",
};

function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Términos y Condiciones
        </h1>

        <p className="text-gray-700 mb-6">
          Bienvenido a <span className="font-semibold">HeightComparisonChart.com</span>. Al acceder o utilizar nuestro sitio web, incluida la herramienta de comparación de alturas y todos los servicios relacionados, aceptas cumplir y estar sujeto a los siguientes Términos y Condiciones. Por favor, lee estos Términos cuidadosamente antes de utilizar nuestro sitio.
        </p>

        <p className="text-gray-700 mb-6">
          Si no estás de acuerdo con estos Términos y Condiciones, te pedimos que no utilices el sitio web.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Aceptación de los Términos
          </h2>
          <p className="text-gray-600">
            Al acceder o utilizar HeightComparisonChart.com, aceptas quedar vinculado por estos Términos y Condiciones, así como por nuestra Política de Privacidad. Si utilizas el sitio web en nombre de una organización o entidad, declaras tener autoridad para obligar a dicha organización a cumplir estos Términos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Uso del Sitio Web y los Servicios
          </h2>
          <p className="text-gray-600">
            Te comprometes a utilizar el sitio web y sus servicios únicamente con fines legales y de acuerdo con estos Términos y Condiciones. Aceptas no:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Utilizar el sitio de forma que viole leyes locales, nacionales o internacionales aplicables.</li>
            <li>Realizar actividades que puedan dañar, deshabilitar o sobrecargar el sitio web o interferir con el uso del mismo por parte de otros usuarios.</li>
            <li>Intentar acceder sin autorización a cualquier parte del sitio, sistemas o redes relacionadas.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. Propiedad del Contenido
          </h2>
          <p className="text-gray-600">
            Todo el contenido disponible en HeightComparisonChart.com, incluyendo pero no limitado a textos, gráficos, imágenes, logotipos, videos y comparaciones, es propiedad de HeightComparisonChart.com o de sus licenciantes, y está protegido por leyes de derechos de autor y propiedad intelectual. No puedes copiar, distribuir, modificar o utilizar ningún contenido sin nuestro consentimiento previo por escrito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            4. Contenido Generado por el Usuario
          </h2>
          <p className="text-gray-600">
            Si envías cualquier tipo de contenido al sitio (como comentarios, sugerencias u opiniones), nos concedes una licencia no exclusiva, gratuita, mundial, para usar, modificar y mostrar dicho contenido en el sitio. Declaras y garantizas que tienes derecho a compartir dicho contenido y que este no infringe los derechos de terceros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            5. Exactitud de la Información
          </h2>
          <p className="text-gray-600">
            Aunque nos esforzamos por proporcionar información precisa y actualizada, no garantizamos la exactitud, integridad o confiabilidad del contenido de HeightComparisonChart.com. Las comparaciones de altura y datos presentados tienen fines informativos generales y no deben considerarse medidas exactas. Recomendamos verificar la información de forma independiente cuando sea necesario.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            6. Enlaces a Terceros
          </h2>
          <p className="text-gray-600">
            Nuestro sitio web puede contener enlaces a sitios o servicios de terceros que no son operados por nosotros. No controlamos ni respaldamos el contenido o las prácticas de privacidad de estos sitios externos. Si accedes a un sitio de terceros desde el nuestro, lo haces bajo tu propio riesgo y quedas sujeto a los términos y condiciones de ese sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            7. Limitación de Responsabilidad
          </h2>
          <p className="text-gray-600">
            En la máxima medida permitida por la ley, HeightComparisonChart.com y sus afiliados, directivos, empleados y agentes no serán responsables por ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que resulte del uso del sitio web o cualquier contenido o servicio ofrecido en él. Esto incluye, pero no se limita a errores, omisiones, interrupciones o problemas técnicos relacionados con el sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            8. Indemnización
          </h2>
          <p className="text-gray-600">
            Aceptas indemnizar, defend y mantener indemne a HeightComparisonChart.com, sus afiliados, directivos, empleados y agentes frente a cualquier reclamación, responsabilidad, daño, pérdida o gasto (incluidos honorarios legales) derivados del incumplimiento de estos Términos y Condiciones o del uso del sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            9. Terminación
          </h2>
          <p className="text-gray-600">
            Nos reservamos el derecho de suspender o cancelar tu acceso al sitio web, a nuestra entera discreción y sin previo aviso, si consideramos que has violado estos Términos y Condiciones.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            10. Cambios en los Términos y Condiciones
          </h2>
          <p className="text-gray-600">
            Podemos actualizar o modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será publicado en esta página con la fecha actualizada. Al continuar utilizando el sitio después de dichos cambios, aceptas los Términos revisados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            11. Legislación Aplicable
          </h2>
          <p className="text-gray-600">
            Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que opera HeightComparisonChart.com, sin tener en cuenta los principios de conflicto de leyes.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            12. Contáctanos
          </h2>
          <p className="text-gray-600">
            Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en:
          </p>
          <p className="text-gray-600 mt-4">
            <span className="font-semibold">HeightComparisonChart.com</span>
          </p>
          <p className="text-gray-600">
            Correo electrónico: <span className="text-blue-600">{EMAIL}</span>
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;
