import styled from "styled-components";

const TituloPaginaStyle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    
    .titulo{
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .subtitulo{
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export {TituloPaginaStyle};