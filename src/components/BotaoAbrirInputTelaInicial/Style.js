import styled from "styled-components";

const BotaoAbrirInputTelaInicialStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    position: fixed;
    bottom: 0;
    left: 0;
    
    transition: transform 0.5s ease-out;
    z-index: 10;
    
    .botao{
        background: white;
        border: none;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        transition: 0.5s all ease-out;
        z-index: 1000;
        cursor: pointer;
    }
    
    .botao:hover{
        transform: scale(1.1);
    }
    
    &.visible{
        transform: translateY(0);
    }

    &.visible .botao{
        transform: rotate(180deg);
    }
    
    &.hidden{
        transform: translateY(16rem);
    }
`;

export {BotaoAbrirInputTelaInicialStyle};