import HeaderTelaInicial from "../components/HeaderTelaInicial/HeaderTelaInicial";
import SubitituloHome from "../components/SubitituloHome/SubitituloHome";
import BaseHome from "./BaseHome";
import SelecoesAvatar from "../components/SelecoesAvatar/SelecoesAvatar";
import Botao from "../components/Botao/Botao";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const EscolhaAvatar = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState(localStorage.getItem("name"));
    const [id, setId] = useState("");

    const handleAvatarSelection = async () => {
        const selectedAvatar = document.querySelector('.swiper-slide-active [id]');
        const avatarId = selectedAvatar?.id;
        localStorage.setItem("avatar", avatarId);

        const idAluno = await adicionarUsuarioAoBackend(avatarId);
        if (idAluno) {
            localStorage.setItem("id", idAluno);
            navigate('/cronograma');
        }
    }

    const adicionarUsuarioAoBackend = async (avatarId) => {
        const csrftoken = Cookies.get('csrftoken');
        const response = await fetch("http://127.0.0.1:8000/api/espectador/", {
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
        console.log("Usuário adicionado com sucesso:", data);
        return data.id;
    }

    useEffect(() => {
        const storedNome = localStorage.getItem("name");
        setNome(storedNome);
        console.log(storedNome);
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
        </BaseHome>
    )
}

export default EscolhaAvatar