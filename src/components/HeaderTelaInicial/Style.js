import styled from "styled-components";

const HeaderTelaInicialStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
    
  .boas-vindas {
      color: #FFF;
      font-family: Inter;
      font-size: 1rem;
      font-style: italic;
      font-weight: 400;
      line-height: normal;
  }
    
    .titulo {
        display: flex;
        flex-direction: column;
        
        .titulo-principal {
            color: #FFF;
            font-family: Inter;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.09rem;
        }
        
        .titulo-secundario {
            color: #CD0909;
            font-family: Inter;
            font-size: 2.5rem;
            font-style: italic;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.15rem;
        }
    }
    
`;

export {HeaderTelaInicialStyle};