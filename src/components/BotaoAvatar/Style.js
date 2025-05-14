import styled from "styled-components";

const BotaoAvatarStyle = styled.article`
    width: 11.97244rem;
    height: 11.97244rem;
    flex-shrink: 0;
    aspect-ratio: 191.56/191.56;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    overflow: hidden;
    
    svg{
        border-radius: 50%;
        width: 100%;
        height: 80%;
    }
    

    &.desativado {
        background-color: #4d4d4d;
        
        svg{
            filter: brightness(0.5);
        }
    }

    &.ativado {
        background-color: #d9d9d9;
    }
`;

export {BotaoAvatarStyle};