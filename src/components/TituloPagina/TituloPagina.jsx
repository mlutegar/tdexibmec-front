import {TituloPaginaStyle} from "./Style";

const TituloPagina = ({id, titulo, subtitulo, style}) => {
    return (
        <TituloPaginaStyle id={id} style={style}>
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