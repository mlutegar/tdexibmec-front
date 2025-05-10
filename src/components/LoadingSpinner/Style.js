import styled from "styled-components";

const LoadingSpinnerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
    }

    .message {
        color: white;
        margin-top: 16px;
        font-size: 16px;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export {LoadingSpinnerStyle};