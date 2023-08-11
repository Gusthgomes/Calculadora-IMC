import { useState } from 'react';
import './app.css';

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcImc(){
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if(peso === "" || altura === ""){
      alert("por favor preencha os campos!")
      return;
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 80"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 170"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcImc}>
          Calcular
        </button>

      </div>

      <h2>Seu IMC foi de: #comentário</h2>
    </div>
  )
}