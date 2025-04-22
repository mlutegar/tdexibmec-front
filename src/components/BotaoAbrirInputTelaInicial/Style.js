import styled from "styled-components";

const BotaoAbrirInputTelaInicialStyle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    
    .botao{
        background: white;
        border: none;
        border-radius: 50%;
        position: absolute;
        width: 4rem;
        height: 4rem;
        bottom: 4rem;
    }

    .visible{
        display: block;
    }
    
    .hidden{
        display: none;
    }
`;

export {BotaoAbrirInputTelaInicialStyle};