import {ToolTipStyle} from "./Style";

const ToolTip = ({children, left, top, className, onClick, id, style, orientation = 'esquerda'}) => {
    return (
        <ToolTipStyle id={id} className={`${className} ${orientation}`} left={left} top={top} style={style}>
            <svg className={`ponta ${orientation}`} xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M7 0L13.9282 12H0.0717969L7 0Z" fill="white"/>
            </svg>
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