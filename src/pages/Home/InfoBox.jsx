import boxe from '../../assets/images/boxeFora.png' //imagem boxe
import volei from '../../assets/images/voleiFora.png' //imagem volei
import turfle from '../../assets/images/turfleFora.png' //imagem turfle
import basquete from '../../assets/images/basqueteFora.png' //imagem basquete
import noImage from '../../assets/images/download.png';// imagem vazia
import corrida from '../../assets/images/corridaFora.png' //imagem corrida
import futeboll from '../../assets/images/futebolFora.png' //imagem futeboll
import trilha from '../../assets/images/TrilhaFora.png' //imagem trilha
import tenis from '../../assets/images/tenisFora.png' //imagem tenis

export const InfoBox = (props) => {
    const Esportes = [
        [
            "[undefined]",
             noImage,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptas deleniti explicabo numquam perspiciatis pariatur!
             Quasi esse sit.`,
             "Pagina Vazia"
        ],
        [
            "BOXE",
             boxe,
            `Boxe ou pugilismo é um esporte de combate e arte marcial, 
             no qual os lutadores usam apenas os punhos, tanto para
             a defesa, quanto para o ataque.`,
             "Lutadores de Boxe"
        ],
        [
            "VOLEI",
             volei,
             `É um esporte de popularidade significativa em grande parte
              do mundo, e está presente em muitos torneios e eventos
              esportivos de âmbito internacionais.`,
              "Jogadoras de Volei"
        ],
        [
            "TURFLE",
             turfle,
             `Turfe é o esporte que promove e incentiva corridas de cavalos.
              Em sua forma mais difundida, teve origem no Reino Unido e é
              hoje um dos esportes mais tradicionais.`,
              "Joqueis andando á cavalo"
        ],
        [
            "BASQUETE",
             basquete,
             `O jogo é disputado por duas equipes de cinco jogadores que tem
              por objetivo passar a bola por dentro do cesto disposto nas
              extremidades do campo.`,
              "michael jordan fazendo um passe"
        ],
        [
            "CORRIDA",
             corrida,
             `Corrida é uma competição de velocidade ou resistência. Os competidores
              tentam completar uma determinada tarefa no menor período de tempo.`,
              "Mulher Correndo na Estrada"
        ],
        [
            "FUTEBOL",
             futeboll,
             `É disputado por duas equipes, de 11 jogadores que têm como objetivo
              colocar a bola entre as traves adversárias o maior número de vezes sem
              usar mãos e braços.`,
              "CR7 Chutando a bola direto pro gol"
        ],
        [
            "TRILHA",
             trilha,
             `É um caminho sem pavimentação asfáltica presente geralmente em meios
              naturais e rurais, que são normalmente utilizadas no sistema ecoturistíco.`,
              "Homem no meio de uma trilha"
        ],
        [
            "TENIS",
             tenis,
             `O tênis é um jogo de múltiplas contagens parciais, como pontos, games,
              sets e partidas. Cada lance pode ser rebatido ainda no ar ou após um
              quique da bola na quadra.`,
              "Dois Jogadores de Tênis"
        ]
    ]
    let ArrayIndex = 0;

    for (let i = 0; i < Esportes.length; i++) {
        if (Esportes[i][0] ==  String(props.Esporte).toUpperCase()) {
            ArrayIndex = i;
        }
    }

    return(
        <>
        {/* InfoBox */}
        <div className='infobox'>
            <img src={Esportes[ArrayIndex][1]} alt={Esportes[ArrayIndex][4]}/>
            <h2>{Esportes[ArrayIndex][0]}</h2>
            <p>{Esportes[ArrayIndex][2]}</p>
        </div>
        </>
    );
}
