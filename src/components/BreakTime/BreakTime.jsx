import {BreakTimeStyle} from "./Style";

const BreakTime = ({horarioInicio = "11:00", horarioFim = "12:00"}) => {
    return (
        <BreakTimeStyle>
          <div className={'horario'}>
            {horarioInicio}
          </div>
          <div className={"break-time"}>
            <div className={"break"}>
              BREAK
            </div>

            <div className={"time"}>
              TIME
            </div>
          </div>
          <div className={'horario'}>
            {horarioFim}
          </div>
        </BreakTimeStyle>
    )
}
export default BreakTime;