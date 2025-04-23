import styled from "styled-components";

const BarraProgressoStyle = styled.article`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    
    .barTrack{
        position: relative;
        height: 0.625rem;
        background-color: white;
        border-radius: 999px;
        overflow: hidden;
    }
    
    .barFill{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: red;
        width: ${props => props.progress}%;
        transition: width 0.3s ease-out;
    }
    
    .barText{
        color: #FFF;
        font-family: Inter;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        
        text-align: right;
        margin-bottom: 4px;
        width: ${props => props.progress + 6}%;
        transition: width 0.3s ease-out;
    }
`;

export {BarraProgressoStyle};

