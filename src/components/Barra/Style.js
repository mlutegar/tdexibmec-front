import styled, {keyframes} from "styled-components";

const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.largura}rem;
  }
`;

const BarraStyle = styled.article`
    width: ${props => props.largura}rem;
    height: 3.625rem;
    flex-shrink: 0;
    background: #CD0909;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.125rem;
    animation: ${expandWidth} 5s ease-out forwards;
    gap: 1rem;
    
    color: #FFF;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    .avatar{
        width: 3rem;
        height: 3rem;

        svg{
            width: 2rem;
        }
    }
    
    .info {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        img{
            width: 2.27681rem;
            height: 2.125rem !important;
            flex-shrink: 0;
            aspect-ratio: 36.43/34.00;
            border: none;
        }
    }
    
    .container-pontuacao {
        position: relative;
        left: 3rem;
    }
`;

export {BarraStyle};