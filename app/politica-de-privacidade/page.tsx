import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política De Privacidade",
  description:
    "Quando os visitantes deixam comentários no site, coletamos os dados exibidos no formulário de comentários, bem como o endereço IP do visitante e a string do agente do usuário do navegador para ajudar na detecção de spam.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-6 lg:px-12 py-10 space-y-4">
      <h1 className="text-3xl font-extrabold text-gray-900">Política De Privacidade</h1>

      <h2 className="text-xl font-bold mt-6">Quem somos</h2>
      <p>
        O endereço do nosso site é: <a className="text-primary underline" href="https://br.heightcomparisonchart.com">https://br.heightcomparisonchart.com</a>.
      </p>

      <h2 className="text-xl font-bold mt-6">Comentários</h2>
      <p>
        Quando os visitantes deixam comentários no site, coletamos os dados exibidos no formulário de comentários, bem como o endereço IP do visitante e a string do agente do usuário do navegador para ajudar na detecção de spam.
      </p>
      <p>
        Uma string anônima criada a partir do seu endereço de e-mail (também chamada de hash) pode ser fornecida ao serviço Gravatar para verificar se você o está utilizando. A política de privacidade do Gravatar está disponível aqui: <a className="text-primary underline" target="_blank" rel="noopener noreferrer" href="https://automattic.com/privacy/">https://automattic.com/privacy/</a>. Após a aprovação do seu comentário, sua foto de perfil ficará visível ao público no contexto do comentário.
      </p>

      <h2 className="text-xl font-bold mt-6">Mídia</h2>
      <p>
        Se você enviar imagens para o site, evite fazer upload de imagens que contenham dados de localização incorporados (EXIF GPS). Os visitantes do site podem baixar e extrair quaisquer dados de localização das imagens no site.
      </p>

      <h2 className="text-xl font-bold mt-6">Cookies</h2>
      <p>
        Se você deixar um comentário no nosso site, poderá optar por salvar seu nome, endereço de e-mail e site nos cookies. Isso é para sua conveniência, para que você não precise preencher seus dados novamente ao deixar outro comentário. Esses cookies durarão um ano.
      </p>
      <p>
        Se você visitar nossa página de login, definiremos um cookie temporário para determinar se seu navegador aceita cookies. Este cookie não contém dados pessoais e será descartado ao fechar o navegador.
      </p>
      <p>
        Ao fazer login, também configuramos vários cookies para salvar suas informações de login e suas preferências de exibição de tela. Os cookies de login duram dois dias, e os cookies de opções de tela duram um ano. Se você selecionar “Lembrar-me”, seu login permanecerá ativo por duas semanas. Se você sair da sua conta, os cookies de login serão removidos.
      </p>
      <p>
        Se você editar ou publicar um artigo, um cookie adicional será salvo no seu navegador. Esse cookie não inclui dados pessoais e apenas indica o ID da postagem do artigo que você acabou de editar. Ele expira após um dia.
      </p>

      <h2 className="text-xl font-bold mt-6">Conteúdo incorporado de outros sites</h2>
      <p>
        O conteúdo incorporado de outros sites se comporta exatamente da mesma forma que se o visitante tivesse visitado o outro site. Esses sites podem coletar dados sobre você, usar cookies, incorporar rastreamento adicional de terceiros e monitorar sua interação com o conteúdo incorporado.
      </p>
    </main>
  );
}
