import {TelaPretaStyle} from "./Style";

const TelaPreta = ({className, children, onClick}) => {
    return (
        <TelaPretaStyle className={className} onClick={onClick}>
            {children}
        </TelaPretaStyle>
    )
}

export default TelaPreta;