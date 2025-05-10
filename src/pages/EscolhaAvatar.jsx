import HeaderTelaInicial from "../components/HeaderTelaInicial/HeaderTelaInicial";
import SubitituloHome from "../components/SubitituloHome/SubitituloHome";
import BaseHome from "./BaseHome";
import SelecoesAvatar from "../components/SelecoesAvatar/SelecoesAvatar";
import Botao from "../components/Botao/Botao";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const EscolhaAvatar = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState(localStorage.getItem("name"));
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAvatarSelection = async () => {
        const selectedAvatar = document.querySelector('.swiper-slide-active [id]');
        const avatarId = selectedAvatar?.id;

        if (!avatarId) {
            // Adicionar um feedback ao usuário se nenhum avatar estiver selecionado
            alert("Por favor, selecione um avatar");
            return;
        }

        // Mostrar o loading spinner
        setLoading(true);

        localStorage.setItem("avatar", avatarId);

        try {
            const idAluno = await adicionarUsuarioAoBackend(avatarId);
            if (idAluno) {
                localStorage.setItem("id", idAluno);
                navigate('/cronograma');
            } else {
                // Se houve erro, esconder o loading
                setLoading(false);
            }
        } catch (error) {
            console.error("Erro ao processar seleção de avatar:", error);
            setLoading(false);
            // Opcional: adicionar um feedback ao usuário sobre o erro
            alert("Ocorreu um erro ao selecionar o avatar. Tente novamente.");
        }
    }

    const adicionarUsuarioAoBackend = async (avatarId) => {
        const csrftoken = Cookies.get('csrftoken');
        const response = await fetch("https://tedxibmec.fly.dev/api/espectador/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                nome: nome,
                avatar: avatarId,
            }),
        });

        if (!response.ok) {
            console.error("Erro ao adicionar usuário ao backend");
            return null;
        }

        const data = await response.json();
        return data.id;
    }

    useEffect(() => {
        const storedNome = localStorage.getItem("name");
        setNome(storedNome);
    }, [navigate]);

    return (
        <BaseHome>
            <HeaderTelaInicial/>
            <SubitituloHome>
                Selecione o seu avatar
            </SubitituloHome>
            <SelecoesAvatar/>
            <Botao
                onClick={handleAvatarSelection}
            >
                SELECIONAR
            </Botao>

            {loading && <LoadingSpinner message="Processando sua seleção..." />}
        </BaseHome>
    )
}

export default EscolhaAvatar