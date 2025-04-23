import styled from "styled-components";

const CardPerguntaStyle = styled.article`
    background: #FFF;
    width: 16.875rem;
    height: 3.0625rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1.31rem;
    gap: 1rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    
    &.ativo {
        background: #CD0909;
    }

    &.incorreto {
        background: #878787;
    }
    
    &.correto {
        background: #008000;
    }

    &.ativo, &.incorreto, &.correto {
        .texto-alternativa, .letra-alternativa {
            color: #FFF;
        }
    }

    .letra-alternativa {
        color: #CD0909;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 2rem;
    }

    .texto-alternativa {
        color: #000;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export {CardPerguntaStyle};