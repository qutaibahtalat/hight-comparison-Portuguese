import React from "react";
import type { Metadata } from "next";
import { EMAIL } from "@/misc/data";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "non",
};

function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Política de Privacidad
        </h1>

        <p className="text-gray-600 mb-4">
          Fecha de entrada en vigor: <span className="font-medium">15 de enero de 2025</span>
        </p>

        <p className="text-gray-700 mb-6">
          En <span className="font-semibold">HeightComparisonChart.com</span>, valoramos tu privacidad y estamos comprometidos a proteger la información personal que compartes con nosotros mientras utilizas nuestro sitio web. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando visitas o utilizas nuestros servicios.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Información que Recopilamos
          </h2>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            a. Información Personal
          </h3>
          <p className="text-gray-600 mb-4">
            La información personal se refiere a cualquier dato que pueda identificarte personalmente. No requerimos que proporciones información personal para acceder a nuestras herramientas de comparación de alturas. Sin embargo, si decides crear una cuenta o contactarnos, podríamos recopilar lo siguiente:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Preferencias del usuario (como categorías de comparación preferidas)</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-700 mb-2">
            b. Información No Personal
          </h3>
          <p className="text-gray-600">
            Recopilamos automáticamente información no personal sobre tu interacción con nuestro sitio web. Esto incluye:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Tipo y versión del navegador</li>
            <li>Dirección IP</li>
            <li>Información del dispositivo (por ejemplo, móvil o de escritorio)</li>
            <li>Páginas visitadas en nuestro sitio web</li>
            <li>Fecha y hora de las visitas</li>
            <li>Sitios de referencia o términos de búsqueda</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Uso de la Información
          </h2>
          <p className="text-gray-600">
            Utilizamos la información recopilada para los siguientes fines:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Personalizar tu experiencia con la herramienta de comparación de alturas</li>
            <li>Responder consultas o solicitudes de soporte</li>
            <li>Mejorar nuestro sitio web y servicios</li>
            <li>Analizar el rendimiento del sitio y los patrones de uso</li>
            <li>Enviar actualizaciones, boletines o promociones ocasionales (solo si has dado tu consentimiento)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. Cookies y Tecnologías de Seguimiento
          </h2>
          <p className="text-gray-600">
            Usamos cookies y tecnologías de seguimiento similares (como Google Analytics) para mejorar tu experiencia en nuestro sitio. Las cookies nos ayudan a recordar tus preferencias, seguir tus interacciones y recopilar datos sobre cómo navegan los usuarios.
          </p>
          <p className="text-gray-600 mt-4">
            Puedes controlar la configuración de cookies desde tu navegador. Sin embargo, desactivar las cookies podría afectar tu capacidad de usar ciertas funciones del sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            4. Seguridad de los Datos
          </h2>
          <p className="text-gray-600">
            Utilizamos medidas de seguridad estándar en la industria para proteger tu información personal. No obstante, ningún método de transmisión de datos por internet o almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por proteger tus datos, no podemos garantizar su seguridad absoluta.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            5. Compartición de la Información
          </h2>
          <p className="text-gray-600">
            No compartimos, vendemos ni alquilamos tu información personal a terceros con fines de marketing. Sin embargo, podríamos compartir información no personal con proveedores de análisis u otros socios para mejorar nuestros servicios.
          </p>
          <p className="text-gray-600 mt-4">
            También podríamos divulgar información si la ley lo requiere o para proteger los derechos, la propiedad o la seguridad de HeightComparisonChart.com, sus usuarios o el público.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            6. Enlaces a Terceros
          </h2>
          <p className="text-gray-600">
            Nuestro sitio web puede contener enlaces a sitios web o servicios externos que no operamos. No somos responsables de las prácticas de privacidad o del contenido de estos sitios de terceros. Te recomendamos revisar sus políticas de privacidad antes de proporcionar cualquier información personal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            7. Privacidad de los Niños
          </h2>
          <p className="text-gray-600">
            Nuestro sitio no está destinado a niños menores de 13 años y no recopilamos conscientemente información personal de ellos. Si crees que un niño nos ha proporcionado información personal, contáctanos y tomaremos las medidas necesarias para eliminar esos datos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            8. Tus Derechos y Opciones
          </h2>
          <p className="text-gray-600">Tienes derecho a:</p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Acceder y actualizar tu información personal</li>
            <li>Solicitar la eliminación de tu información personal (sujeto a ciertas condiciones)</li>
            <li>Cancelar la suscripción a nuestras comunicaciones de marketing en cualquier momento</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Para ejercer estos derechos, por favor contáctanos en: <span className="text-blue-600">{EMAIL}</span>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            9. Cambios a Esta Política de Privacidad
          </h2>
          <p className="text-gray-600">
            Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando realicemos cambios, publicaremos la nueva política en esta página y actualizaremos la "Fecha de entrada en vigor" en la parte superior. Te recomendamos revisar esta política periódicamente para estar al tanto de cómo protegemos tu información.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            10. Contáctanos
          </h2>
          <p className="text-gray-600">
            Si tienes preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo manejamos tus datos, contáctanos en:
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

export default PrivacyPolicy;
