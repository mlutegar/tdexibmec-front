import styled from "styled-components";

const ColunaStyle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
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
        height: 7.75rem;
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
    }
`;

export {ColunaStyle};