import {useNavigate} from "react-router-dom";
import { HeaderStyle } from "./Style";
import {Logo} from "../../svgs/Logo";
import {Sair, sair} from "../../svgs/Sair";



const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }

    const handleLogoClick = () => {
        navigate("/cronograma");
    }

    return (
        <HeaderStyle>
            <Logo onClick={handleLogoClick} className={'logo'}/>
            <Sair onClick={handleLogout}/>
        </HeaderStyle>
    )
}

export default Header;