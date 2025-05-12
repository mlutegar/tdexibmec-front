import styled from "styled-components";

const SideModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${props => props.isOpen ? 'block' : 'none'};
    z-index: 1000;
`;

const SideModalContent = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: #000000;
    color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.3s ease-in-out;
    z-index: 10001;
    padding: 1.5rem;
`;

export { SideModalOverlay, SideModalContent };