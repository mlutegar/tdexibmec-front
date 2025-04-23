import styled from "styled-components";

const BotaoStyle = styled.button`
    width: 13.0625rem;
    height: 3rem;
    flex-shrink: 0;
    background: #CD0909;

    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    border: none;

    transition: background 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #A00000;
    }

    &:active {
        background: #fc2f2f;
    }

    &:disabled {
        background: #A0A0A0;
        cursor: not-allowed;
        color: #FFF;
    }
`;

export {BotaoStyle};