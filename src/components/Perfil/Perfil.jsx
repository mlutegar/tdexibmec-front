import {PerfilStyle} from "./Style";
import {SetaSair} from "../../svgs/SetaSair";

const Perfil = ({onClick}) => {
    return (
        <PerfilStyle>
            <img src={"imagens/perfilDefault.png"} alt="Perfil"/>

            <div className="perfil">
                michel lutegar
                <div className={"sair"} onClick={onClick}>
                    <SetaSair/>
                    Sair do Quiz
                </div>
            </div>
        </PerfilStyle>
    )
}

export default Perfil;