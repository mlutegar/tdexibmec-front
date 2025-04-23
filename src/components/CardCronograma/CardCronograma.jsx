import {CardCronogramaStyle} from "./Style";
import {SetaLevarPaginaInteracao} from "../../svgs/SetaLevarPaginaInteracao";

const CardCronograma = ({
                            urlFotoConvidado = "imagens/fotoDefaultCronogramaPalestrante.png",
                            nomeConvidado,
                            horarioInicio,
                            horarioFim,
                            onClick,
                        }) => {
    return (
        <CardCronogramaStyle>
            <img
                src={urlFotoConvidado}
                alt="Foto do convidado"
                className="fotoConvidado"
            />

            <div className={'informacoesPalestrante'}>
                <div className={'nomePalestrante'}>
                    {nomeConvidado}
                </div>
                <div className={'horarioPalestrante'}>
                    {horarioInicio} - {horarioFim}
                </div>
            </div>

            <div className={'setaEnviarParaPaginaPalestrante'}>
                <SetaLevarPaginaInteracao onClick={onClick}/>
            </div>
        </CardCronogramaStyle>
    )
};

export default CardCronograma;