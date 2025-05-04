import styled from "styled-components";

const TelaPretaStyle = styled.article`
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 64%);
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30000;

    display: flex;
    align-items: center;
    justify-content: center;
    
    &.hidden {
        display: none;
    }
`;

export {TelaPretaStyle};