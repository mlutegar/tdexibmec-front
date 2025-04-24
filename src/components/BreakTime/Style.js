import styled from "styled-components";

const BreakTimeStyle = styled.article`
    border-top: 3px solid #fff;;
    border-bottom: 3px solid #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    box-sizing: border-box;
    margin: 0 2rem;

    color: #FFF;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    .horario{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
    .break-time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        .break {
            color: #CD0909;
            text-shadow: 0px 0px 11px #CD0909;
            font-family: Inter;
            font-size: 1.5rem;
            font-style: italic;
            font-weight: 600;
            line-height: normal;
        }

        .time {
            color: #FFF;
            text-shadow: 0px 0px 11px #CD0909;
            font-family: Inter;
            font-size: 1.5rem;
            font-style: italic;
            font-weight: 300;
            line-height: normal;
        }
    }
`;

export {BreakTimeStyle};