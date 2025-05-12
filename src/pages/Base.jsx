import Header from "../components/Header/Header";
import PerfilInfo from "../components/PerfilInfo/PerfilInfo";
import SideModal from "../components/SideModal/SideModal";
import {useState} from "react";

const Base = (props) => {
    const [isPerfilModalOpen, setIsPerfilModalOpen] = useState(false);

    const handleTogglePerfilModal = () => {
        setIsPerfilModalOpen(!isPerfilModalOpen);
    };

    return (
    <>
        <Header onPerfilClick={handleTogglePerfilModal}/>
        <div className="container">
            {props.children}
        </div>
        <SideModal isOpen={isPerfilModalOpen} onClose={() => setIsPerfilModalOpen(false)}>
            <PerfilInfo/>
        </SideModal>
    </>
)
}

export default Base;