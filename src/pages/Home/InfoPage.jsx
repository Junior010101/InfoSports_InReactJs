import { Header } from '../../components/Cabecalho';
import { Slogan } from '../../components/Slogan';
import { Footer } from '../../components/Rodape';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingPage } from '../LoadingPage';
import boxe from '../../assets/images/boxeDentro.png';
import volei from '../../assets/images/voleiDentro.png';
import turfle from '../../assets/images/turfleDentro.png';
import basquete from '../../assets/images/basqueteFora.png';
import corrida from '../../assets/images/corridaFora.png';
import futebol from '../../assets/images/futebolFora.png';
import trilha from '../../assets/images/TrilhaFora.png';
import tenis from '../../assets/images/tenisFora.png';

const esportes = {
  boxe: {
    imagem: boxe,
    nome: "Boxe",
    descricao: `O boxe, também chamado de pugilismo, é um esporte que surgiu no Egito por volta de 3.000 a.C., como uma atração das festas realizadas pelos faraós. Contudo, o esporte se tornou popular apenas na Grécia Antiga, por volta no século VII a.C, com sua inclusão nas modalidades olímpicas. No Egito Antigo, além do boxe, esportes como levantamento de peso, natação e atletismo já eram praticados na época. Nas tumbas de Saqqara, construída a mais de 4.400 anos, foram identificadas cenas com boxeadores lutando, enquanto faraós e príncipes observavam a competição. O boxe ficou mais popular na Grécia Antiga, contudo sabe-se pouco sobre as regras do esporte na época. Mas se tinha conhecimento que os lutadores poderiam atacar com os punhos e envolviam os dedos com tiras de couro. O fim do jogo era decretado quando um dos atletas ficava inconsciente ou indicava desistência.`
  },
  volei: {
    imagem: volei,
    nome: "Vôlei",
    descricao: `Vólei é um desporto praticado numa quadra dividida em duas partes por uma rede, possuindo duas equipes de seis jogadores em cada lado. O objetivo da modalidade fazer passar a bola sobre a rede de modo a que esta toque no chão dentro da quadra adversária, ao mesmo tempo que se evita que os adversários consigam fazer o mesmo. O voleibol é um desporto olímpico, regulado pela Fédération Internationale de Volleyball (FIVB). O voleibol foi inventado em 9 de Fevereiro de 1895 porWilliam George Morgan nos Estados Unidos da América. O objetivo de Morgan, que trabalhava na ACM de Holyoke no Massachusetts, era criar um esporte de equipes sem contato físico entre os adversários de modo a minimizar os riscos de lesão. Inicialmente jogava-se com uma câmara de ar da bola de basquetebol e foi chamado Mintonette, mas rapidamente ganhou popularidade com o nome de volleyball. O criador do voleibol faleceu em 27 de dezembro de 1942 aos 72 anos de idade. Um time que deseja competir em nível internacional precisa dominar um conjunto de seis habilidades básicas, denominadas usualmente sob a rubrica "fundamentos". Elas são: saque, passe, levantamento, ataque, bloqueio e defesa. A cada um destes fundamentos compreende um certo número de habilidades e técnicas que foram introduzidas ao longo da história do voleibol e são hoje consideradas prática comum no esporte.`
  },
  turfle: {
    imagem: turfle,
    nome: "Turfle",
    descricao: `O turfe, da forma em que é conhecido hoje, surgiu na Inglaterra, por volta do século XVII. Para as competições foram sendo selecionados cavalos com aptidão para corridas, incluindo animais trazidos do norte da África das raças berbere e árabe, que eram comprados ou tomados em batalhas.`
  },
  basquete: {
    imagem: basquete,
    nome: "Basquete",
    descricao: `O atletismo surgiu como esporte na Grécia Antiga em 776 a.C., no ano em que a primeira Olimpíada da história foi realizada, na cidade de Olímpia. Naquela época, foi disputada apenas uma prova durante as Olimpíadas, uma corrida de aproximadamente 200 metros. O nome do primeiro vencedor dessa prova foi Coroebus.`
  },
  corrida: {
    imagem: corrida,
    nome: "Corrida",
    descricao: `A corrida é uma das atividades físicas mais antigas da humanidade, praticada desde os tempos pré-históricos como forma de sobrevivência. Ganhou status de competição na Grécia Antiga, sendo a prova principal nos primeiros Jogos Olímpicos em 776 a.C., com destaque para as corridas de estádio (192 metros).`
  },
  futebol: {
    imagem: futebol,
    nome: "Futebol",
    descricao: `O futebol moderno surgiu na Inglaterra durante o século XIX, mas relatos históricos apontam que já existiam práticas esportivas parecidas. Atualmente, grandes competições de futebol são organizadas todos os anos por diferentes entidades futebolísticas (nacionais, continentais ou internacionais).`
  },
  trilha: {
    imagem: trilha,
    nome: "Trilha",
    descricao: `Trilha é um caminho terrestre a seguir, estreito, entre vegetação e com obstáculos. O termo já foi mais utilizado para definir circuitos de moto e bicicleta, mas vem se popularizando e tornando-se mais conhecida como trajetos feitos a pé, caminhando. Podemos caminhar entre as ruas das cidades, mas isso nos aproxima de situações do dia-a-dia: estresse do trabalho ou da vida social, correria, quantidade de informações que chegam e precisam ser processadas, barulho, poluição. Por isso, cada vez mais as pessoas buscam um contato maior com a natureza: querem distância de todos os fatores que lembram sua vida diária e buscam um ambiente de paz e tranquilidade.`
  },
  tenis: {
    imagem: tenis,
    nome: "Tênis",
    descricao: `Existem diferentes maneiras de contar a história do tênis, com relatos que vêm de períodos variados da humanidade. Porém, os mais antigos começam no século V, presentes tanto no Egito, quanto nos países europeus. Naquele momento, o que era praticado era o tênis de campo - bem diferente do que conhecemos agora: não haviam raquetes e as bolas eram rebatidas com as mãos. No século XII, porém, o esporte continuava a ser jogado com as mãos, mas o formato já era mais similar ao atual. Chamado pelos franceses de “jeu de paume” (jogo da palma), os monges o disputavam em ambientes fechados, que foram os primeiros registros do surgimento do tênis de quadra. Ali, o objetivo dos jogadores era arremessar a bola contra a parede e rebatê-la. Ou seja, bem parecido com o que hoje conhecemos como squash.`
  }
};

function InfoPage() {
    const [removeLoading, setRemoveLoading] = useState(false);
    const { nome } = useParams();
    const info = esportes[nome];

    useEffect(() => {
        import(`../../sass/index.scss`).then(() => {
        setRemoveLoading(true);
        });
    }, []);

    if (!info) {
        return (
        <div className="text-center mt-10 text-red-600 text-xl">
            Esporte não encontrado!
        </div>
        );
    }

    return (
        <>
        <Header />
        <Slogan />
        <main>
            <div className='box'>
                <div className='foto'>
                    <img src={info.imagem} alt="Volei" />
                </div>

                <div className='texto'>
                    <h3>{info.nome}</h3>
                    <p>
                    {info.descricao}
                    </p>
                </div>
            </div>
        </main>
        <Footer />
        {!removeLoading && <LoadingPage />}
        </>
    );
}

export default InfoPage;
