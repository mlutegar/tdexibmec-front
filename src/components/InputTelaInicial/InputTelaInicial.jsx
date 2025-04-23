import {InputTelaInicialStyle} from "./Style";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const InputTelaInicial = ({className}) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nome enviado:', name);

        navigate('/cronograma', {
            state: {name}
        });
    };

    return (
        <InputTelaInicialStyle className={className} onSubmit={handleSubmit}>
            <label htmlFor="name">NOME</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                placeholder="digite seu nome"
            />
            <button type="submit" disabled={!name.trim()}>
                ENTRE
            </button>
        </InputTelaInicialStyle>
    )
}

export default InputTelaInicial;