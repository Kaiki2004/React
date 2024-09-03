import React, { useState } from 'react';
import './App.css';
// Definindo a interface para os itens da lista
interface Item {
    id: number;
    name: string;
    price: number;
    quantty: number;
  }
  // Componente de Lista que renderiza itens com base em uma condição
  const ItemList: React.FC = () => {
    const [items] = useState<Item[]>([
      { id: 1, name: 'Apple', price: 50, quantty:10 },
      { id: 2, name: 'Apple', price: 50, quantty:10 },
      { id: 3, name: 'Apple', price: 50, quantty:10 },
      { id: 4, name: 'Apple', price: 50, quantty:10 },
      { id: 5, name: 'Apple', price: 50, quantty:10 },
    ]);
    const [showItems, setShowItems] = useState<boolean>(true);
    return (
      <div>
        <h1>Lista de Itens</h1>
        <button onClick={() => setShowItems(!showItems)}>
          {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
        </button>
        {/* Renderização Condicional */}
        {showItems ? (
          <ul>
            {/* Renderizando a lista de itens */}
            {items.map((item) => (
              <li key={item.id}>{item.name}  preço: {item.price} quantidade: {item.quantty}</li>
            ))}
          </ul>
        ) : (<p>A lista está oculta</p>
        )}
      </div>
    );
  };
  export default ItemList;