import {TituloPaginaStyle} from "./Style";

const TituloPagina = ({titulo, subtitulo}) => {
    return (
        <TituloPaginaStyle>
            <div className={'titulo'}>
                {titulo}
            </div>
            <div className={'subtitulo'}>
                {subtitulo}
            </div>
        </TituloPaginaStyle>
    )
}

export default TituloPagina;