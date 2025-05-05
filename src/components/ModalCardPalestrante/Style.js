import styled from "styled-components";

const ModalCardPalestranteStyle = styled.article`
    display: none;
    position: absolute;
    width: 19rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #FFF;
    z-index: 2;
    color: black;
    padding: 1rem 0;
    box-sizing: content-box;
    
    &.active{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        z-index: 30001;
    }
    
    img{
        width: 17.5rem;
        height: 17.5rem;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        border-radius: 0.625rem !important;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
    }
    
    .informacoes-convidado{
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 14.5625rem;
    }

    .nome-convidado{
        color: #000;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .horario{
        color: #000;
        font-family: Inter;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .descricao-convidado{
        width: 14.5625rem;
        flex-shrink: 0;

        color: #000;
        font-family: Inter;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .fechar{
        position: absolute;
        right: 1rem;
        top: 1.5rem;
        z-index: 999;
        
        cursor: pointer;
        
        &:hover{
            transform: scale(1.1);
        }
        
        &:active{
            transform: scale(0.9);
        }
    }
`;

export {ModalCardPalestranteStyle};