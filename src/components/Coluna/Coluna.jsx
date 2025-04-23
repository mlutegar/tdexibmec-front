import {ColunaStyle} from "./Style";

const Coluna = ({
                    posicaoNumero = 1,
                    nomeCompetidor = "michel",
                    iconeCompetidor = "imagens/perfilDefault.png",
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
                <img src={iconeCompetidor} alt="icone" style={{height: altura}}/>
            </div>
            <div className={'torre'} style={{height: calcularAltura(posicaoNumero) + 'rem'}}>
                {posicaoNumero}
            </div>
        </ColunaStyle>
    )
}

export default Coluna;