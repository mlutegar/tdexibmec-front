import {TelaPretaStyle} from "./Style";

const TelaPreta = ({className, children}) => {
    return (
        <TelaPretaStyle className={className}>
            {children}
        </TelaPretaStyle>
    )
}

export default TelaPreta;