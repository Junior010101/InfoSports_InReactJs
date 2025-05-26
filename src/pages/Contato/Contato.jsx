import { useEffect, useState } from 'react';
import { Header } from '../../components/Cabecalho'; // Importando cabeçalho
import { Footer } from '../../components/Rodape'; // Importando rodapé
import { LoadingPage } from '../LoadingPage'
import { Form } from './Formulario';

function Contact() {
    const [RemoveLoading, setRemoveLoading] = useState(false);
    
    useEffect(() => {
        // Atualizando o título da página
        document.title = "InfoSports - Contato";

        // Adicionando a folha de estilo principal
        const style = document.createElement('link');
        style.rel = "stylesheet";
        style.href = "./src/sass/contact.scss";
        style.id = 'loaded'

        document.head.appendChild(style);

        // Removendo Tela de Load
        const handleLoad = () => {
            setRemoveLoading(true);
        };
    
        style.addEventListener('load', handleLoad);
    
        // Removendo a folha de estilo ao trocar de página
        return () => {
            style.removeEventListener('load', handleLoad);
    
            // Verifica se o elemento ainda está no DOM antes de removê-lo
            if (document.head.contains(style)) {
            document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <>
        {/* Página de Contato */}
        <Header />
        <main>
            <Form />
        </main>
        <Footer />
        {/* Tela de Loading */}
        {!RemoveLoading && <LoadingPage/>}
        </>
    );
}

export default Contact;
