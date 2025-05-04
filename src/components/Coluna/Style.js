import styled, { keyframes } from "styled-components";

const expandHeight = keyframes`
    from {
        height: 0;
        margin-top: auto;
    }
    to {
        height: ${props => props.altura}rem;
        margin-top: 0;
    }
`;

const ColunaStyle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .avatar{
        width: 4rem;
        height: 4rem;

        svg{
            width: 2.5rem;
        }
    }
    
    .icone{
        img{
            width: 3.95088rem;
            height: 3.6875rem !important;
            flex-shrink: 0;
            aspect-ratio: 63.21/59.00;
        }
    }
    
    .torre {
        width: 3.4375rem;
        height: ${props => props.altura || '7.75rem'};
        flex-shrink: 0;
        background: #CD0909;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        animation: ${expandHeight} 5s ease-out forwards;
        transform-origin: bottom;
    }
`;

export {ColunaStyle};