import {onAuthStateChanged} from "firebase/auth"
import Base from "./Base"
import {auth} from "../config/Firebase";
import {useEffect} from "react";
import TelaInicialUsuario from "../components/TelaInicialUsuario/TelaInicialUsuario";

const Home = () => {

    /* useEffect(()=> {
      onAuthStateChanged(auth, (user)=> {
        if (user) {
          window.sessionStorage.setItem("accessToken", user.accessToken);
        } else {
          window.sessionStorage.removeItem("accessToken");
        }
      })
    },[]) */


    return (
        <Base>
            <TelaInicialUsuario/>
        </Base>
    )
}

export default Home