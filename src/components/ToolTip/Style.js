import styled from "styled-components";

const ToolTipStyle = styled.article`
    padding: 1.25rem 1.5rem;
    flex-shrink: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;

    border-radius: 0.625rem;
    background: #FFF;

    color: #000;
    font-family: Inter,serif;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    position: absolute;
    top: ${props => props.top}rem;
    left: ${props => props.left}rem;
    z-index: 99999;
    
    &.direita{
        align-items: flex-end;
    }
    
    .ponta{
        position: absolute;
    }
    
    .esquerda{
        top: -0.6rem;
        left: 0.4rem;
    }
    
    .direita{
        top: -0.6rem;
        right: 0.4rem;
    }
    
    .texto{
        max-width: ${19-3}rem;
    }
    
    button{
        color: #FFF;
        font-family: Inter;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        width: 5.375rem;
        height: 1.5rem;
        flex-shrink: 0;
        background: #CD0909;
        border: none;
        cursor: pointer;
        
        &:hover{
            background: #A00000;
        }
        
        &:active{
            background: #CD0909;
        }
    }
`;

export {ToolTipStyle};