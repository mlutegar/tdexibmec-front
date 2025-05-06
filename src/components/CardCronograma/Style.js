import styled from "styled-components";

const CardCronogramaStyle = styled.article`
    display: flex;
    gap: 2rem;
    justify-content: center;

    img {
        width: 4.6875rem;
        height: 4.6875rem;
        flex-shrink: 0;
        aspect-ratio: 1/1;

        border-radius: 3.125rem;
        border: 2px solid #FFF;
    }
    
    &.active{
        z-index: 9999 !important;
    }

    &.posterior{
        .nomePalestrante {
            color: #A7A7A7 !important;
        }
        
        img {
            border-radius: 3.125rem;
            border: 3px solid #878787;
            filter: saturate(0%);
        }
    }
    
    &.dentro{
        .nomePalestrante {
            color: #CD0909 !important;
        }
        
        img {
            border: 2px solid #CD0909 !important;
        }
    }

    .informacoesPalestrante {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
        .nomePalestrante {
            color: #FFF;
            font-family: Inter;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 900;
            line-height: normal;

            text-transform: uppercase;
        }
    }
    
    .setaEnviarParaPaginaPalestrante {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        svg {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export {CardCronogramaStyle};