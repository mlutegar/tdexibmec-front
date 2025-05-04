import {ColunaStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {getAvatar} from "../../Avatar";
import {Homem1} from "../../svgs/avatars/Homem1";

const Coluna = ({
                    posicaoNumero = 1,
                    nomeCompetidor = "michel",
                    iconeCompetidor = "homem1",
                    altura = 100
                }) => {

    const calcularAltura = (posicaoNumero) => {
        switch (posicaoNumero) {
            case 1:
                return 7.75;
            case 2:
                return 5.0625;
            case 3:
                return 3.25;
        }
    }

    return (
        <ColunaStyle >
            <div className={'nome'}>
                {nomeCompetidor}
            </div>
            <div className={'icone'}>
                <BotaoAvatar
                    className={'avatar'}
                    ativado={true}
                >
                    { getAvatar(iconeCompetidor) }
                </BotaoAvatar>
            </div>
            <div className={'torre'} style={{height: calcularAltura(posicaoNumero) + 'rem'}}>
                {posicaoNumero}
            </div>
        </ColunaStyle>
    )
}

export default Coluna;