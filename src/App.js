import { createContext, useEffect, useState } from 'react';
import axois from 'axios';
import './App.scss';
import { Drawer, Header, Main } from './components';
import axios from 'axios';

export const ContextCartSneakers = createContext(null);
export const ContextSearchSneaker = createContext();

export default function App() {

  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSneakerAdded, setIsSneakerAdded] = useState(false);
  const [searchSneaker, setSearchSneaker] = useState('');

  useEffect(() => {
    axios.get('https://635a769c6f97ae73a62d5445.mockapi.io/items').then(res => setSneakers(res.data));
  }, []);

  return (
    <div className="App-container">
      {isCartOpen && <Drawer cartSneakers={cartSneakers} setCartSneakers={setCartSneakers} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>}
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      <ContextSearchSneaker.Provider value={{searchSneaker, setSearchSneaker}}>
        <ContextCartSneakers.Provider value={{cartSneakers, setCartSneakers}}>
          <Main sneakers={sneakers} isSneakerAdded={isSneakerAdded} setIsSneakerAdded={setIsSneakerAdded}/>
        </ContextCartSneakers.Provider>
      </ContextSearchSneaker.Provider>
    </div>
  );
}