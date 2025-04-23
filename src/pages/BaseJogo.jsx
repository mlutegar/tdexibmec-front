import HeaderJogo from "../components/HeaderJogo/HeaderJogo";
import {PontuacaoProvider} from "../context/PontuacaoProvider";

const BaseJogo = (props) => (
    <>
        <HeaderJogo/>
        <div className="container">
            {props.children}
        </div>
    </>
)

export default BaseJogo;