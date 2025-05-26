import { useEffect, useState } from 'react';
import { Header } from '../../components/Cabecalho'; // Importando cabeçalho
import { Slogan } from '../../components/Slogan'; // Importando subtítulo da página
import { Footer } from '../../components/Rodape'; // Importando rodapé
import { InfoBox } from './InfoBox'; // Importando caixas de texto
import { Form } from './Formulario'; // Importando formulário
import { LoadingPage } from '../LoadingPage'

function Index() {  
  const [RemoveLoading, setRemoveLoading] = useState(false)

  useEffect(() => {
    // Atualizando o título da página
    document.title = "InfoSports - Principal";

    // Adicionando a folha de estilo principal
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "./src/sass/index.scss";
    style.id = 'loaded'

    document.head.appendChild(style);

    // Removendo Tela de Load
    const handleLoad = () => {
      setRemoveLoading(true);
    };

    style.addEventListener('load', handleLoad);

    // Removendo a folha de estilo ao trocar de página
    return () => {
      // Removendo o evento de carregamento
      style.removeEventListener('load', handleLoad);

      // Verifica se o elemento ainda está no DOM antes de removê-lo
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      {/* Página Principal */}
      <Header/>
      <Slogan/>
      <main>
            
        <section>
          <InfoBox Esporte="boxe"/>
          <InfoBox Esporte="volei"/>
          <InfoBox Esporte="turfle"/>
          <InfoBox Esporte="basquete"/>
          <InfoBox Esporte="corrida"/>
          <InfoBox Esporte="futebol"/>
          <InfoBox Esporte="trilha"/>
          <InfoBox Esporte="tenis"/>
        </section>

        <aside>
          <Form/>
        </aside>
      </main>
      <Footer/>

      {/* Tela de Loading */}
      {!RemoveLoading && <LoadingPage/>}
    </>
  );
}

export default Index;
