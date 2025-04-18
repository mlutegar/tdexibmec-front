import { TelaInicialUsuarioStyle } from "./Style";
import {useState} from "react";

const TelaInicialUsuario = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para avançar aqui
    console.log('Nome enviado:', name);
  };

  return (
      <TelaInicialUsuarioStyle>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Digite seu nome"
          />
          <button type="submit" disabled={!name.trim()}>
            Avançar
          </button>
        </form>
      </TelaInicialUsuarioStyle>
  )
}

export default TelaInicialUsuario;