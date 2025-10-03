import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes (FAQ)",
  description: "Preguntas frecuentes sobre HeightComparisonChart.com",
};

function FAQPage() {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Preguntas Frecuentes (FAQ)
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. ¿Cómo uso la herramienta de comparación de alturas?
            </h2>
            <p className="text-gray-700">
              Para usar la herramienta de comparación de alturas, simplemente selecciona las categorías o entidades que deseas comparar, como personas, animales, edificios o personajes ficticios. Ingresa los datos requeridos y la herramienta generará una comparación visual mostrando la altura de cada entidad.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. ¿Los datos de altura son precisos?
            </h2>
            <p className="text-gray-700">
              Nos esforzamos por proporcionar datos de altura precisos y confiables para cada entidad. Sin embargo, ten en cuenta que la información proporcionada es solo con fines informativos generales y puede no ser 100% exacta. Para obtener mediciones más precisas, recomendamos realizar una verificación independiente.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. ¿Puedo comparar personajes u objetos que no están en la lista del sitio?
            </h2>
            <p className="text-gray-700">
              Sí, contamos con una lista predefinida de categorías y entidades, pero estamos agregando nuevas comparaciones constantemente. Si deseas comparar algo que no aparece en el sitio web, puedes ubicar la opción "Agregar imagen" en la barra de navegación y subir la imagen del elemento que deseas comparar.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. ¿Tiene algún costo usar la herramienta de comparación de alturas?
            </h2>
            <p className="text-gray-700">
              No, nuestra herramienta de comparación de alturas es completamente gratuita. Creemos en ofrecer acceso a contenido educativo y entretenido sin costo para nuestros usuarios.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. ¿Recopilan información personal cuando uso el sitio web?
            </h2>
            <p className="text-gray-700">
              Solo recopilamos información personal mínima si decides interactuar con ciertas funciones, como contactarnos o suscribirte a nuestro boletín. Para más detalles sobre cómo manejamos tus datos, consulta nuestra Política de Privacidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
