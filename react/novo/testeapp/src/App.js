import React from "react";
import Input from "./Input";

// https://viacep.com.br/ws/01001000/json/

const App = () => {
  const inputCep = React.useRef();
  const [cep, setCep] = React.useState(null);
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  function handleClick() {
    setLoading(true);
    const cepDigitado = inputCep.current.value;
    setCep(cepDigitado);
  }

  React.useEffect(() => {
    if (cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [cep]);

  React.useEffect(() => {
    setLoading(false);
  }, [dados]);

  return (
    <>
      <h1>Busca CEP</h1>
      <Input
        domElement={inputCep}
        type="text"
        name="cep"
        label="Informe seu CEP:"
      />
      <button style={{ margin: "1rem 0" }} onClick={handleClick}>
        Buscar
      </button>
      {loading && <p>Carregando Dados...</p>}
      <Input
        type="text"
        name="logradouro"
        label="Logradouro"
        valor={dados ? dados.logradouro : ""}
      />
      <Input
        type="text"
        name="bairro"
        label="Bairro"
        valor={dados ? dados.bairro : ""}
      />
      <Input
        type="text"
        name="estado"
        label="Estado"
        valor={dados ? dados.localidade : ""}
      />
      <Input
        type="text"
        name="cidade"
        label="Cidade"
        valor={dados ? dados.uf : ""}
      />
    </>
  );
};

export default App;
