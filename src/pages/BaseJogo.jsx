import HeaderJogo from "../components/HeaderJogo/HeaderJogo";

const BaseJogo = (props) => (
    <>
        <HeaderJogo/>
        <div className="container">
            {props.children}
        </div>
    </>
)

export default BaseJogo;