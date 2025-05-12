import {PerfilInfoStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {useEffect, useState} from "react";
import {getAvatar} from "../../Avatar";
import Botao from "../Botao/Botao";
import {useNavigate} from "react-router-dom";
import {usePontuacao} from "../../context/PontuacaoProvider";

const PerfilInfo = () => {
    const [avatarId, setAvatarId] = useState(localStorage.getItem("avatar") || "homem3");
    const [pontuacao, setPontuacao] = useState(0);
    const navigate = useNavigate();
    const { resetarPontuacao } = usePontuacao();

    const verificarQuizzesFeitos = () => {
        const completedQuizzes = JSON.parse(localStorage.getItem("completedQuizzes")) || [];
        return completedQuizzes.length > 0;
    }

    const alterarPalestrandeIdPara0 = () => {
        const palestranteId = localStorage.getItem("palestrante-id");
        if (palestranteId) {
            localStorage.setItem("palestrante-id", 0);
        }
    }

    useEffect(() => {
        const pontuacaoSalva = localStorage.getItem('pontuacao');
        if (pontuacaoSalva) {
            setPontuacao(parseInt(pontuacaoSalva));
        }
    }, [pontuacao]);

    const handleRanking = () => {
        if (verificarQuizzesFeitos()){
            alterarPalestrandeIdPara0();
            navigate("/ranking");
        } else {
            alert("Você ainda não completou nenhum quiz.");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("avatar");
        localStorage.removeItem("pontuacao");
        localStorage.removeItem("toolTipCronograma");
        localStorage.removeItem("id");
        localStorage.removeItem("palestrante");
        localStorage.removeItem("completedQuizzes");
        localStorage.removeItem("palestrante-id");
        resetarPontuacao();

        for (let i = 0; i < 5; i++) {
            localStorage.removeItem(`perguntaAtual-${i}`);
        }
        navigate("/");
    }

    return (
        <PerfilInfoStyle>
            <div className={"perfil"}>
                <BotaoAvatar
                    ativado={true}
                >
                    {getAvatar(avatarId)}
                </BotaoAvatar>

                <div>
                    <div>
                        Pontuação
                    </div>
                    <div>
                        {pontuacao}
                    </div>
                </div>
            </div>

            <div>
                Michel Lutegar
            </div>

            <Botao onClick={handleRanking}>
                RANKING GERAL
            </Botao>
            <Botao onClick={handleLogout}>
                LOGOUT
            </Botao>
        </PerfilInfoStyle>
    )
}

export default PerfilInfo;