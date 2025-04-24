import {ToolTipStyle} from "./Style";

const ToolTip = ({children, left, top, className, onClick, id, style}) => {
    return (
        <ToolTipStyle id={id} className={className} left={left} top={top} style={style}>
            <div className={'texto'}>
                {children}
            </div>
            <button onClick={onClick}>
                Entendi!
            </button>
        </ToolTipStyle>
    )
}

export default ToolTip;