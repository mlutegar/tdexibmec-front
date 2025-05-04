import styled from "styled-components"

const HeaderStyle = styled.header`
    height: 7.38rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    border-bottom: 5px solid #fff;
    margin-bottom: 1rem;
    
    .logo{
        width: 9rem;
        height: 1.375rem;
    }
    
    .perfil{
        width: 3rem;
        height: 3rem;
        
        svg{
            width: 2rem;
        }
    }
`

export {HeaderStyle}