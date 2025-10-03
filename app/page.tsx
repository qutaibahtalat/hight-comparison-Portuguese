"use client";
import AddPerson from "@/components/controls/AddPerson";
import Board from "@/components/controls/Board";
import AddItems from "@/components/controls/AddItems";
import NavBar from "@/components/NavBar";
import { useGlobals } from "@/contexts/GlobalContext";
import AddImage from "@/components/controls/AddImage";
import BoardUtilities from "@/components/controls/BoardUtilities";
import EditPersons from "@/components/controls/EditPersons";
import Celebrities from "@/components/controls/Celebrities";
import { ItemType } from "@/misc/enums";
import AddPokemon from "@/components/controls/AddPokemon";
import { BsImage } from "react-icons/bs";
import { cn } from "@/misc/utils";
import AdsenseUnit from "@/components/google-ads/AdsenseUnit";
import { useEffect } from "react";

export default function Home() {
  const { selectedScreen, setSelectedScreen } = useGlobals();

  useEffect(() => {
    document.title = "Comparação De Altura";
  }, []);

  // Define the screens inside the component
  const screens = {
    "Adicionar pessoa": <AddPerson key="add-person" />,
    "Editar pessoas": <EditPersons key="edit-persons" />,
    "Celebridades": <Celebrities key="celebrities" category="Celebrities" />,
    "Fictício": <Celebrities key="fictional" category="Fictional" />,
    "Objetos": <AddItems type={ItemType.OBJECT} key="add-items-object" />,
    "Edifícios": <AddItems type={ItemType.BUILDING} key="add-items-building" />,
    "Animais": <AddItems type={ItemType.ANIMAL} key="add-items-animal" />,
    "Pokémon": <AddPokemon key="add-items-pokemon" />,
    "Adicionar imagem": <AddImage key="add-image" />,
  };

  return (
    <main className="p-2.5 space-y-2.5 flex flex-col items-stretch">
      <NavBar className="hidden lg:flex z-[9999]" />
      
      <div className="flex flex-col lg:flex-row gap-2.5  h-fit lg:min-h-screen relative z-10">
        <div className="w-full h-full lg:max-w-[400px] bg-white rounded-2xl shadow-sm p-4 border border-gray-200 overflow-y-auto">
          {screens[selectedScreen as keyof typeof screens]}
        </div>
        <div className="flex flex-col flex-grow gap-2 order-first lg:order-none">
          <BoardUtilities />
          <Board />
          <span
            onClick={() => setSelectedScreen("Adicionar imagem")}
            className={`flex md:hidden w-full justify-center items-center gap-2 max-h-[50px] py-4 px-6 h-full !mt-0 border-b border-transparent bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:text-primary hover:border-primary/40 ${cn(
              selectedScreen === "Adicionar imagem" && "!text-primary !border-primary"
            )}`}
          >
            <BsImage />
            <span className="text-xs text-center"> Adicionar imagem</span>
          </span>
          <NavBar className="lg:hidden" />
          {/* Ad 1: Mobile only, below navbar */}
          <AdsenseUnit
            slot="9247849685"
            format="auto"
            responsive={true}
            className="lg:!hidden block"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2.5">
        <div className="w-full md:min-w-[400px] md:max-w-[400px]">
          <AdsenseUnit slot="7985047243" format="auto" responsive={true} />
        </div>
        <Content />
      </div>
    </main>
  );
}

const Content = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 [&_p]:text-sm [&_h1]:text-2xl [&_h1]:font-extrabold [&_h1]:text-gray-900 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h2]:mt-4 [&_p]:mt-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2  [&_ul]:text-sm [&_ul]:mt-2 [&_li]:text-sm [&_li]:mt-2 [&_li]:mb-2">
      <h2>Gráfico De Comparação De Altura</h2>
      <p>
        Nossa incrível ferramenta online permite que você meça diferenças de altura ou compare alturas. Ela possui uma interface gráfica fácil de usar que permite comparar alturas com várias pessoas ao mesmo tempo. Você pode comparar as alturas de duas pessoas, de um grupo de amigos ou de membros da família. Esta ferramenta pode te ajudar de forma rápida e fácil.
      </p>
      <h2>Simples, Mas Avançada</h2>
      <p>
        Esta ferramenta de comparação de altura permite que dois usuários insiram suas respectivas alturas, com o primeiro usuário representando um homem e o segundo uma mulher. Assim que as alturas são inseridas, nossa tabela mostra a diferença de altura entre os dois indivíduos em um gráfico vertical visualmente atraente. Fica fácil comparar e visualizar a disparidade de altura entre os dois usuários.
        Nossa ferramenta de comparação de altura utiliza algoritmos avançados para fornecer os resultados mais precisos possíveis. Seja para comparar sua própria altura com a de outras pessoas ou a altura de um grupo, nossa ferramenta pode ajudá-lo de diversas formas.
      </p>
      {/* Demo image illustrating the comparison (place the PNG at public/images/comparacao-de-altura-demo.png) */}
      <div className="w-full my-4">
        <img
          src="/images/comparacao-de-altura-demo.png"
          alt="Comparação De Altura"
          className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
          loading="lazy"
        />
      </div>
      <h2>Benefícios</h2>
      <p>Nossa ferramenta de comparação oferece vários benefícios aos usuários, incluindo:</p>
      <ul>
        <li>Precisão: Nossa ferramenta usa algoritmos avançados para fornecer resultados exatos.</li>
        <li>Facilidade de Uso: A ferramenta é simples de usar e não requer conhecimentos técnicos.</li>
        <li>Personalização: Permite personalizar a comparação de acordo com suas preferências.</li>
        <li>Versatilidade: Pode comparar a altura de homens, mulheres, casais e famílias.</li>
        <li>Gratuidade: É totalmente gratuita, sem custos envolvidos.</li>
      </ul>
      <h2>Propósito</h2>
      <p>
        O objetivo da nossa ferramenta de comparação de altura é ajudar as pessoas a comparar sua altura com a de outras. Nosso site fornece informações sobre a altura média das pessoas por meio dessa ferramenta. Você pode usar essas informações para calcular se sua altura é maior ou menor do que a de seus amigos. Os usuários das nossas ferramentas de simulação de comparação de altura podem inserir sua altura e a ferramenta a comparará com a altura média do seu grupo demográfico. Nossas ferramentas avançadas também permitem comparar sua altura com a de indivíduos específicos.
      </p>
      <h2>Como Usar Nossa Ferramenta de Comparação de Altura</h2>
      <ul>
        <li>Certifique-se de ter uma conexão estável com a internet.</li>
        <li>Acesse nosso site e clique na ferramenta de comparação.</li>
        <li>Escolha o tipo de comparação que deseja usar (homem vs. homem, mulher vs. mulher, casal ou família).</li>
        <li>Insira a altura da primeira pessoa em pés e polegadas no gráfico de altura.</li>
        <li>Insira a altura da segunda pessoa (se aplicável).</li>
        <li>Clique no botão “Comparar” abaixo do gráfico de diferença de altura para ver os resultados.</li>
      </ul>
      <h2>Precisão</h2>
      <p>
        Nossa ferramenta fornece uma ideia geral de como a altura de uma pessoa se compara com a de outras dentro do seu grupo demográfico. No entanto, é importante lembrar que os resultados dessas ferramentas devem ser usados como uma estimativa aproximada e não como uma medição definitiva da altura de uma pessoa.
      </p>
      <h2>Experimente Agora</h2>
      <p>
        Nossa ferramenta é um recurso digital útil que pode fornecer informações sobre sua altura e como você se compara com os outros ao seu redor. Seja para conhecer mais sobre ferramentas de comparação de altura ou para encontrar uma ferramenta que ajude a comparar sua altura com a de outras pessoas, nossa ferramenta de comparação pode ser um recurso valioso.
      </p>
    </div>
  );
};
