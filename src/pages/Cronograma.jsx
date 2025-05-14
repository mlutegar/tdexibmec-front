import Base from "./Base"
import {useNavigate} from "react-router-dom";
import CardCronograma from "../components/CardCronograma/CardCronograma";
import BreakTime from "../components/BreakTime/BreakTime";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import {useEffect, useState} from "react";
import ToolTip from "../components/ToolTip/ToolTip";
import TelaPreta from "../components/TelaPreta/TelaPreta";
import MensagemToolTip2 from "../components/MensagemToolTip2/MensagemToolTip2";

const Cronograma = () => {
    const QUANTIDADE_MAXIMA_DE_TOOL_TIPS = 4;
    const navigate = useNavigate();

    const [quantidadeDeToolTipsClicados, setQuantidadeDeToolTipsClicados] = useState(0);
    const [ehPraMostrarToolTip, setEhPraMostrarToolTip] = useState(localStorage.getItem("toolTipCronograma") !== "true");
    const [completedQuizzes, setCompletedQuizzes] = useState([]);

    const handleClick = (palestrante) => {
        localStorage.setItem("palestrante-id", palestrante.id);

        if (completedQuizzes.includes(`${palestrante.id}`)) {
            navigate('/ranking', {
                state: {
                    palestrante: palestrante
                }
            });
            return;
        }

        navigate('/palestrante', {
            state: {
                palestrante: palestrante
            }
        });
    }

    const handleClickFinalizado = (palestrante) => {
        localStorage.setItem("palestrante-id", palestrante.id);

        navigate('/ranking', {
            state: {
                palestrante: palestrante
            }
        });
    }

    const convidados = [
        {
            nome: "Samuel",
            horario_inicio: "09:45",
            horario_fim: "10:00",
            descricao: "Reitor do Ibmec Rio de Janeiro. Doutor em Administração pela Universidade de Bordeaux (França). Mais de 20 anos de experiência profissional nas áreas de gestão, finanças, marketing e tecnologia. Professor em escolas internacionais como Universidade de Sorbonne-Paris 1 e Universidade de Bordeaux.  Conselheiro empresarial. Como líder acadêmico e empresarial, tenho como missão promover a excelência e a inovação na educação e no mercado, contribuindo para o desenvolvimento de talentos, negócios e sociedade. Além disso, sou autor de publicações científicas e técnicas sobre comportamento de consumo, finanças e gestão de recursos humanos nas empresas.\n\n" +
                "A evolução tecnológica acentua o abismo social na maioria das vezes, no entanto, a revolução tecnológica bancária vem modificando esse cenário ano após ano. A necessidade de acessar um maior contingente de pessoas para maximizar seus resultados, entregar programas sociais e benefícios a baixo custo forçou, principalmente no período pandêmico, a bancarização da população brasileira, e essa bancarização já traz frutos para a economia real e o bem-estar das famílias.",
            imagem: "imagens/palestrantes/samuel.jpg",
            id: 1
        },
        {
            nome: "Marcio Borges",
            horario_inicio: "10:00",
            horario_fim: "10:20",
            descricao: "Marcio Borges é Vice-Presidente Executivo e Diretor Geral da WMcCann no Rio de Janeiro. Pesquisador do NetLab da UFRJ, Marcio é Doutorando em Ciência da Informação e Mestre em Comunicação pela ECO/UFRJ. Tem mais de 25 anos de atuação na área de comunicação, com expertise em mídias digitais. Conquistou ao longo de sua carreira os mais importantes prêmios nacionais e internacionais da área, como Cannes Lions, Effie, Caboré, Clio, LIA, entre outros.\n\n" +
                "Como a Nossa Dieta de Dados Impacta Nossos Hábitos Sociais\n" +
                "Vivemos imersos em fluxos constantes de dados — notícias, curtidas, algoritmos e métricas que moldam o que vemos, pensamos e até como nos comportamos.  Como a \"ciência dos dados sociais\" - a combinação de Data Science com Social Science - revela os padrões invisíveis por trás das interações digitais e examina o impacto de nossa dieta de dados no cotidiano: da formação de opiniões ao consumo, das amizades ao engajamento político. Um convite à reflexão sobre como os dados que consumimos nos transformam — e transformam a sociedade.\n",
            id: 2
        },
        {
            nome: "Nina Talks",
            horario_inicio: "10:20",
            horario_fim: "10:40",
            descricao: "Empreendedora e criadora de conteúdo educacional sobre experiência do usuário tecnologia. Foi 5x vencedora do Swift Student Challenge da Apple, é TEDx speaker, LinkedIn Top Voice e Apple Professional Learning Specialist. Já trabalhou como mentora na Apple Developer Academy PUC-Rio e em empresas como Globo, Accenture e Hurb. Suas redes sociais somam mais de 220 mil entusiastas e apaixonados por design e tecnologia, por conta dos seus conteúdos que descomplicam esse universo, inspirando mais pessoas (principalmente mulheres) a ingressar no mundo da tecnologia.\n\n " +
                "A inteligência artificial está transformando o design, tornando experiências digitais mais personalizadas, intuitivas e inclusivas. Vemos desde a automação de tarefas até a criação de interfaces que se adaptam a cada usuário. Além disso, precisamos falar sobre os desafios éticos e criativos desse novo cenário, ressaltando a importância do equilíbrio entre tecnologia e foco humano para criar experiências realmente significativas.\n",
            imagem: "imagens/palestrantes/ninatalks.jpg",
            id: 3
        },
        {
            nome: "Daniel Barros",
            horario_inicio: "10:40",
            horario_fim: "11:00",
            descricao: "Daniel Barros é CEO do Porto Maravalley, hub de tecnologia e inovação do Rio de Janeiro e diretor presidente do Instituo Reap Rio, backbone organization do programa MIT Reap Rio. Formado em Engenharia de produção pela UFRJ com mestrado na Coppe/UFRJ, foi sócio-diretor da empresa elogroup com mais de 15 anos de experiência em atuação como consultor para grandes empresas.\n" +
                "Atuou também como pesquisador na Coppe/UFRJ e como professor de cursos e MBA para executivos. Atualmente, no Maravalley, atua para desenvolver o ecossistema e transformar o Rio de Janeiro a capital da tecnologia e inovação.\n\n" +
                "O Porto Maravalley é o Hub de inovação e tecnologia da cidade do Rio de Janeiro, e tem por objetivo contribuir com o desenvolvimento econômico da cidade com a criação, o desenvolvimento e a atração de negócios de base tecnológica na cidade.",
            imagem: "imagens/palestrantes/daniel.jpg",
            id: 4
        },
        {
            nome: "Victor",
            horario_inicio: "11:40",
            horario_fim: "12:00",
            descricao: "Ao longo da evolução, os seres humanos sofisticaram suas formas de interação, passando a viver em grupos e a compartilhar informações. No entanto, um paradoxo persiste: estruturamo-nos coletivamente, mas mantemos padrões de pensamento e ação fortemente individualizados. Esta palestra apresenta um modelo computacional desenvolvido para identificar e reorganizar perfis de comportamento em contextos colaborativos. O objetivo é formar grupos mais interativos, capazes de gerar soluções otimizadas, revelando como nossos padrões invisíveis de atuação podem impulsionar ou comprometer a inovação coletiva.",
            imagem: "imagens/palestrantes/victor.jpg",
            id: 5
        },
        {
            nome: "Erika Garnier",
            horario_inicio: "12:00",
            horario_fim: "12:20",
            descricao: "Erika Guarnieri é filha amada de Deus. \n" +
                "Esposa de Elizier Jr. e mãe das princesas Pietra e Paula. \n" +
                "\n" +
                "Seus pais, Ângela e Altamir, criaram uma mulher cheia de fé, energia e com uma alegria contagiante. \n" +
                "\n" +
                "A força da sua história pessoal a tornou uma referência no fortalecimento da autoestima de mulheres, impulsionando milhares a encontrarem o caminho da autenticidade.\n" +
                "\n" +
                "Palestrante, mentora de mulheres, especialista em comportamento humano e pós-graduada em biomecânica, Erika realizou seus estudos na área da motivação com o mestre Anthony Robbins, nos EUA. Ao retornar ao Brasil, idealizou a imersão “O Poder da Autoestima”, revelando às mulheres o poder da própria essência. Seu trabalho já impactou mais de 10 mil mulheres em diferentes abordagens mas sempre com um único propósito: possibilitar que mulheres descubram a sua verdadeira potência e possam subir no pódio da própria vida sendo quem nasceram pra ser.\n\n" +
                "Este texto aborda a evolução do poder na era da tecnologia, refletindo sobre os diferentes tipos de poder — posicional, pessoal e de ação/ comunicação — e suas fragilidades e forças. Destaca a importância do poder pessoal e da autenticidade como diferenciais humanos essenciais, mesmo diante do avanço tecnológico e da automação. Observa também o impacto das emoções e das relações interpessoais na construção de conexões genuínas, ressaltando a necessidade de investir na comunicação verdadeira e na liderança com empatia. Por fim, enfatiza que, na era digital, o verdadeiro poder está na combinação do conhecimento, da autenticidade e da capacidade de liderar com inteligência emocional, garantindo uma presença humana mais forte e significativa através da comunicação.",
            imagem: "imagens/palestrantes/erika.jpg",
            id: 6
        },
        {
            nome: "Claudia Romano",
            horario_inicio: "12:40",
            horario_fim: "13:00",
            descricao: "Cláudia Romano é presidente do Instituto Yduqs e vice-presidente do grupo\n" +
                "educacional Yduqs. Presidente do Sindicato das Entidades Mantenedoras dos\n" +
                "Estabelecimentos de Ensino Superior do Rio de Janeiro – Semerj e Presidente\n" +
                "do Pacto pelo Esporte. Embaixadora do Movimento Educa2030, iniciativa do\n" +
                "Pacto Global da ONU no Brasil e membro do Conselho Orientador da Rede\n" +
                "Brasil (CORB), entidade de governança do Pacto Global no Brasil, Conselheira\n" +
                "da Prefeitura da cidade do Rio de Janeiro, Conselheira da Associação\n" +
                "Comercial do RJ (ACRJ), Conselheira do SENAC. É membro sênior do Sport\n" +
                "Integrity Global Alliance (SIGA). Membro do grupo de trabalho sobre Transição\n" +
                "e Dupla Carreira Esportiva do Ministério do Esporte. Conselheira da ANUP\n" +
                "(Associação Nacional das Universidades Particulares) e da Escola Solar\n" +
                "Meninos de Luz. Além disso, atua como Embaixadora da Cultura na Fundação\n" +
                "Cidade das Artes. Com 20 anos dedicados à educação, foi laureada com as\n" +
                "principais Comendas da cidade e do Estado do Rio de Janeiro: a Medalha\n" +
                "Pedro Ernesto em 2019 e a Medalha Tiradentes em 2022.\n\n" +
                "Neste TED inspirador, Cláudia Romano compartilha sua jornada como uma líder que acredita que o futuro é aqui e agora, partindo de uma conexão emocional com a dura realidade da exclusão educacional no Brasil. Ela defende a educação como a principal ferramenta de transformação social e destaca como oportunidades em diferentes frentes — como cultura e esporte — também são sementes de mudança. Compartilhando sua própria trajetória, de quem criou caminhos onde não existiam, ela mostra que desbravar exige coragem, propósito e a proteção dos que ousam sonhar. Ao final, convoca a plateia a agir, lembrando que diversidade, inclusão e justiça não são favores, mas compromissos com o futuro que todos desejamos.\n",
            imagem: "imagens/palestrantes/claudia.jpg",
            id: 7
        },
        {
            nome: "Gilvan Bueno",
            horario_inicio: "14:10",
            horario_fim: "14:30",
            descricao: "Especialista em finanças, mercado de capitais e educação financeira. Foi sócio e gerente educacional no mercado.Comentarista da CNN Money  e Trabalhou em bancos de investimentos e corretoras. Foi palestrante no Fórum Global South Financiers 2025, realizado em Beijin, China.\n\n" +
                "Nesta palestra, o público será convidado a repensar sua relação com o dinheiro, entendendo-o como uma poderosa ferramenta de transformação social. Através de temas como consciência financeira cidadã, consumo e investimento com propósito, inclusão financeira, economias colaborativas e práticas alinhadas a valores sociais, a proposta é refletir sobre como nossas escolhas econômicas individuais impactam o coletivo. Ao final, a audiência será provocada a agir com mais intenção, percebendo que cada decisão financeira contribui para moldar a sociedade em que vivemos.",
            imagem: "imagens/palestrantes/gilvan.jpg",
            id: 8
        },
        {
            nome: "Marcos",
            horario_inicio: "14:30",
            horario_fim: "14:50",
            descricao: "Marcos Caiado é empresário e professor de pós-graduação, ministrando cadeiras em programas de MBA. É doutor em Administração de Empresas pela FGV/EAESP. É advogado e Mestre em Direito. Possui pós-graduação em Filosofia pela PUC-Rio. Foi conselheiro da Federação das Indústrias do Rio de Janeiro (FIRJAN). Atualmente possui assento no conselho de Governança e Compliance na Associação Comercial do Rio de Janeiro (ACRJ).\n\n " +
                "Nesta palestra provocadora e inspiradora, executivos descobrirão as 4 Virtudes essenciais que sustentam a liderança verdadeiramente impactante. A fórmula apresentada resgata um poder muitas vezes esquecido, mas decisivo. Prepare-se para repensar seu papel como CEO, líder e tomador de decisão.",
            imagem: "imagens/palestrantes/marcos.jpg",
            id: 9
        },
        {
            nome: "Marlyson",
            horario_inicio: "14:50",
            horario_fim: "15:10",
            descricao: "Márlyson Silva é CEO e fundador da Transfero, uma empresa global de soluções financeiras com foco em blockchain, stablecoins e inclusão financeira.\n" +
                "\n" +
                "Visionário no setor, liderou o desenvolvimento do primeiro gateway de pagamentos da América Latina a aceitar Bitcoin, além de lançar o primeiro POS compatível com criptomoedas.\n" +
                "\n" +
                "Com mais de 20 anos de experiência em tecnologia, Márlyson iniciou sua jornada em comunidades periféricas do Rio de Janeiro e hoje dedica sua carreira a ampliar o acesso à educação e aos serviços financeiros em economias emergentes.\n" +
                "\n" +
                "Criador do Transfero Academy e mentor de jovens talentos, é movido pelo propósito de transformar vidas por meio da inovação, construindo pontes entre pessoas, tecnologia e oportunidades.\n\n" +
                "Muito além da alta ou da queda do bitcoin, dos debates sobre regulação entre governantes, a blockchain está resolvendo problemas reais. De stablecoins que combatem a inflação a contratos inteligentes que asseguram transações globais, ela está transformando silenciosamente o dia a dia de pessoas, empresas e países.",
            imagem: "imagens/palestrantes/marlyson.jpg",
            id: 10
        },
        {
            nome: "TESTE",
            horario_inicio: "00:01",
            horario_fim: "23:59",
            descricao: "Márlyson Silva é CEO e fundador da Transfero, uma empresa global de soluções financeiras com foco em blockchain, stablecoins e inclusão financeira.\n" +
                "\n" +
                "Visionário no setor, liderou o desenvolvimento do primeiro gateway de pagamentos da América Latina a aceitar Bitcoin, além de lançar o primeiro POS compatível com criptomoedas.\n" +
                "\n" +
                "Com mais de 20 anos de experiência em tecnologia, Márlyson iniciou sua jornada em comunidades periféricas do Rio de Janeiro e hoje dedica sua carreira a ampliar o acesso à educação e aos serviços financeiros em economias emergentes.\n" +
                "\n" +
                "Criador do Transfero Academy e mentor de jovens talentos, é movido pelo propósito de transformar vidas por meio da inovação, construindo pontes entre pessoas, tecnologia e oportunidades.\n\n" +
                "Muito além da alta ou da queda do bitcoin, dos debates sobre regulação entre governantes, a blockchain está resolvendo problemas reais. De stablecoins que combatem a inflação a contratos inteligentes que asseguram transações globais, ela está transformando silenciosamente o dia a dia de pessoas, empresas e países.",
            imagem: "imagens/palestrantes/marlyson.jpg",
            id: 11
        }
    ];

    const handleToolTipClick = () => {
        const newCount = quantidadeDeToolTipsClicados + 1;
        setQuantidadeDeToolTipsClicados(newCount);

        const toolTip1 = document.querySelector("#toolTip1");
        const toolTip2 = document.querySelector("#toolTip2");
        const toolTip3 = document.querySelector("#toolTip3");
        const toolTip4 = document.querySelector("#toolTip4");

        const tituloCronograma = document.querySelector("#tituloCronograma");
        const cardCronograma1 = document.querySelector("#cardCronograma1");
        const cardCronograma2 = document.querySelector("#cardCronograma2");

        const telaPreta = document.querySelector(".telaPreta");

        if (newCount === 1) {
            toolTip1.style.display = "none";
            toolTip2.style.display = "flex";
            tituloCronograma.style.zIndex = "0";
            cardCronograma1.style.zIndex = "9999";
        } else if (newCount === 2) {
            toolTip2.style.display = "none";
            toolTip3.style.display = "flex";
            cardCronograma1.style.zIndex = "0";
            cardCronograma2.style.zIndex = "9999";
        } else if (newCount === 3) {
            toolTip3.style.display = "none";
            toolTip4.style.display = "flex";
            cardCronograma2.style.zIndex = "0";
            // Ajuste outros elementos conforme necessário
        } else if (newCount === 4) {
            toolTip4.style.display = "none";
            telaPreta.style.display = "none";
            localStorage.setItem("toolTipCronograma", "true");
            setEhPraMostrarToolTip(false);
        }
    }

    const resetToolTip = () => {
        setEhPraMostrarToolTip(true);

        const toolTip1 = document.querySelector("#toolTip1");
        const toolTip2 = document.querySelector("#toolTip2");
        const toolTip3 = document.querySelector("#toolTip3");
        const toolTip4 = document.querySelector("#toolTip4");
        const tituloCronograma = document.querySelector("#tituloCronograma");

        const telaPreta = document.querySelector(".telaPreta");

        toolTip1.style.display = "flex";
        toolTip2.style.display = "none";
        toolTip3.style.display = "none";
        toolTip4.style.display = "none";
        telaPreta.style.display = "flex";
        tituloCronograma.style.zIndex = "9999";

        setQuantidadeDeToolTipsClicados(0);
    }

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("completedQuizzes")) || [];
        setCompletedQuizzes(stored);
    }, []);

    return (
        <Base>
            <div style={{display: ehPraMostrarToolTip ? "flex" : "none", position: "absolute", width: "320px"}}>
                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.5} top={-41} id={"toolTip1"}>
                    Seja bem-vindo ao cronograma do TEDX. Aqui você consegue ver o horário de cada palestrante.
                </ToolTip>
                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.6} top={-36}
                         orientation={'direita'}
                         id={"toolTip2"}
                         style={{display: "none"}}>
                    <MensagemToolTip2/>
                </ToolTip>
                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.6} top={-29} id={"toolTip3"}
                         orientation={'direita'}
                         style={{display: "none"}}>
                    Você pode clicar em ON para participar da dinâmica do palestrante. É um Quiz que no final te
                    permite fazer uma pergunta a ele.
                </ToolTip>

                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.15} top={-47} id={"toolTip4"}
                         orientation={'direita'}
                         style={{display: "none"}}>
                    Clicando no perfil, você pode ver suas informações pessoais, sua pontuação geral e conferir sua posição no ranking geral.
                </ToolTip>

                <TelaPreta
                    className={"telaPreta"}
                />
            </div>

            <TituloPagina
                titulo="Cronograma"
                subtitulo={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none" onClick={resetToolTip}>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 5.75C9.3787 5.75 8.875 6.25368 8.875 6.875C8.875 7.28921 8.5392 7.625 8.125 7.625C7.71079 7.625 7.375 7.28921 7.375 6.875C7.375 5.42525 8.5503 4.25 10 4.25C11.4497 4.25 12.625 5.42525 12.625 6.875C12.625 7.58584 12.3415 8.232 11.883 8.704C11.7907 8.7989 11.7027 8.8869 11.6187 8.9708C11.4029 9.1864 11.2138 9.3753 11.0479 9.5885C10.8289 9.8699 10.75 10.0768 10.75 10.25V11C10.75 11.4142 10.4142 11.75 10 11.75C9.5858 11.75 9.25 11.4142 9.25 11V10.25C9.25 9.5948 9.555 9.0644 9.8642 8.6672C10.0929 8.3733 10.3804 8.0863 10.6138 7.85346C10.6842 7.78321 10.7496 7.71789 10.807 7.65877C11.0046 7.45543 11.125 7.18004 11.125 6.875C11.125 6.25368 10.6213 5.75 10 5.75ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.4477 13 9 13.4477 9 14C9 14.5523 9.4477 15 10 15Z"
                          fill="white"/>
                </svg>}
                id={"tituloCronograma"}
                style={{zIndex: "9999"}}
            />

            {
                convidados.slice(0, 4).map((convidado, index) => (
                    <CardCronograma
                        key={index}
                        nomeConvidado={convidado.nome}
                        horarioInicio={convidado.horario_inicio}
                        horarioFim={convidado.horario_fim}
                        onClick={handleClick.bind(null, convidado)}
                        onClickFinalizado={handleClickFinalizado.bind(null, convidado)}
                        urlFotoConvidado={convidado.imagem}
                        descricao={convidado.descricao}
                        id={"cardCronograma" + (index + 1)}
                    />
                ))
            }

            <BreakTime
                horarioFim={convidados[4].horario_inicio}
                horarioInicio={convidados[3].horario_fim}
            />

            {
                convidados.slice(4, 7).map((convidado, index) => (
                    <CardCronograma
                        key={index}
                        nomeConvidado={convidado.nome}
                        horarioInicio={convidado.horario_inicio}
                        horarioFim={convidado.horario_fim}
                        onClick={handleClick.bind(null, convidado)}
                        onClickFinalizado={handleClickFinalizado.bind(null, convidado)}
                        urlFotoConvidado={convidado.imagem}
                        descricao={convidado.descricao}
                        id={"cardCronograma" + (index + 1)}
                    />
                ))
            }

            <BreakTime
                horarioFim={convidados[7].horario_inicio}
                horarioInicio={convidados[6].horario_fim}
            />

            {
                convidados.slice(7, 10).map((convidado, index) => (
                    <CardCronograma
                        key={index}
                        nomeConvidado={convidado.nome}
                        horarioInicio={convidado.horario_inicio}
                        horarioFim={convidado.horario_fim}
                        onClick={handleClick.bind(null, convidado)}
                        onClickFinalizado={handleClickFinalizado.bind(null, convidado)}
                        urlFotoConvidado={convidado.imagem}
                        descricao={convidado.descricao}
                        id={"cardCronograma" + (index + 1)}
                    />
                ))
            }

        </Base>
    )
}

export default Cronograma