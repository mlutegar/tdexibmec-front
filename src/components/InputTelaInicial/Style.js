import styled from "styled-components";

const InputTelaInicialStyle = styled.form`
    border-radius: 6.25rem 6.25rem 0rem 0rem;
    background: #000;
    width: 100vw;
    padding: 2rem 0;
    flex-shrink: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    label{
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }
    
    input{
        width: 15.375rem;
        height: 3.375rem;
        flex-shrink: 0;
        border: none;
        border-radius: 0;
    }
    
    input, input::placeholder{
        color: rgba(0, 0, 0, 0.28);
        text-align: center;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }
`;

export {InputTelaInicialStyle};