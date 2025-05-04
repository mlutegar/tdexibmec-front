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
    
    &.desativado {
        background-color: #D9D9D9;
    }
    
    &.ativado {
        background-color: #cd0909;
    }
`;

export {BotaoAvatarStyle};