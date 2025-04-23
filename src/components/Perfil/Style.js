import styled from "styled-components";

const PerfilStyle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;

    .perfil {
        display: flex;
        flex-direction: column;

        .sair {
            display: flex;
            align-items: center;
            
            color: #FFF;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            
            cursor: pointer;
        }
    }
}
`;

export {PerfilStyle};