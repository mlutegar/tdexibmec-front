import styled from "styled-components";

const TituloPaginaStyle = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 320px;
    box-sizing: border-box;
    justify-content: space-between;
    
    .titulo{
        color: #FFF;
        text-align: left;
        font-family: Inter,serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .subtitulo{
        color: #FFF;
        text-align: center;
        font-family: Inter,serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .mini{
        width: 6rem;
    }
`;

export {TituloPaginaStyle};