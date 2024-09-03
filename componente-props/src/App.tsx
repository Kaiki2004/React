import React from 'react';
import './App.css';
// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;

  endereco: string;
  cidade: string;
}
// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, endereco,cidade }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Your address {endereco}.</p>
      <p>Your city {cidade}.</p>
    </div>
  );
};
function App() {
  return (
    <div className='App'>
      <Welcome name='Kaiki' age={20} endereco='Noêmia' cidade='Franca' />
      <Welcome name='PP' age={20} endereco='puta que pariu' cidade='Franca' />
      <Welcome name='Hugo' age={20} endereco='sei lá' cidade='Franca' />
    </div>
  );
}
export default App;