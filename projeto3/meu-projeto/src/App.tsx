import React, { useState } from 'react';
import './App.css'; 
const EventHandlingExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);
  const [clickCount2, setClickCount2] = useState<number>(0);
  // Função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };// Função para manipular cliques no botão
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };// Função para manipular cliques no botão
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };
  const handleButtonClick2 = () => {
    setClickCount2(clickCount2 - 1);
  };
  return (
    <div>
      <h1>Exemplo de Manipulação de Eventos</h1>
      <div>
        <label htmlFor='inputField'>Digite algo: </label>
        <label htmlFor='inputField2'>Digite seu nome: </label>
        <input
          type='text'
          id='inputField'
          value={inputValue}
          onChange={handleInputChange} />
        <input
          type='text2'
          id='inputField2'
          value={inputValue2}
          onChange={handleInputChange2} />
        <p>Você digitou: {inputValue}</p>
        <p>Você digitou: {inputValue2}</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>
          Clique aqui
        </button>
        <p>O botão foi clicado {clickCount} vezes</p>
      </div>
      <div>
        <button onClick={handleButtonClick2}>
          Clique aqui
        </button>
        <p>O botão foi clicado {clickCount2} vezes</p>
      </div>
    </div>
  );
};
function App() {
  return (
    <div className='App'>
      <EventHandlingExample />
    </div>
  );
}
export default App;
