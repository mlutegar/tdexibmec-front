import Header from "../components/Header/Header";
import HeaderJogo from "../components/HeaderJogo/HeaderJogo";

const Base = (props) => (
    <>
        <HeaderJogo/>
        <div className="container">
            {props.children}
        </div>
    </>
)

export default Base;