import {PerfilStyle} from "./Style";
import {SetaSair} from "../../svgs/SetaSair";
import {useState} from "react";

const Perfil = ({onClick}) => {
    const [nome, setNome] = useState(localStorage.getItem("name") || "Jogador");

    return (
        <PerfilStyle>
            <img src={"imagens/perfilDefault.png"} alt="Perfil"/>

            <div className="perfil">
                {nome}
                <div className={"sair"} onClick={onClick}>
                    <SetaSair/>
                    Sair do Quiz
                </div>
            </div>
        </PerfilStyle>
    )
}

export default Perfil;