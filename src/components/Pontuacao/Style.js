import styled from "styled-components";

const PontuacaoStyle = styled.article`
    width: 5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    background: #CD0909;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    .valor{
        color: #FFF;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export {PontuacaoStyle};