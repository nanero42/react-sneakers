import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ContextCartSneakers, ContextSearchSneaker } from "../../App";
import EIcon from "../../consts";
import Card from "../Card";
import NoContent from "../NoContent";
import Search from "../Search";
import "./index.scss";

export default function Main({sneakers, isSneakerAdded, setIsSneakerAdded}) {

  const {searchSneaker, setSearchSneaker} = useContext(ContextSearchSneaker);
  const {cartSneakers, setCartSneakers} = useContext(ContextCartSneakers);

  const searchByField = 'descr';

  const [searchedSneaker, setSearchedSneaker] = useState([]);

  useEffect(() => {
    axios.get('https://635a769c6f97ae73a62d5445.mockapi.io/cart').then(res => setCartSneakers(res.data));

    setSearchedSneaker(sneakers.filter(s => {
      return s[searchByField].match(searchSneaker, 'gi');
    }) || sneakers);
  }, [sneakers, searchSneaker]);

  const renderItems = searchedSneaker.map((s, idx) => <Card key={idx} sneaker={s} isSneakerAdded={isSneakerAdded} setIsSneakerAdded={setIsSneakerAdded}/>);

  const searchText = searchSneaker ? `Searching by: ${searchSneaker}` : 'All Sneakers';

  return <main className="main">
    <div className="title__container">
      <h1 className="title">{searchText}</h1>
      <Search />
    </div>
    { renderItems.length ? <div className="main__container">{renderItems}</div> : <NoContent type={EIcon.noData} /> }
  </main>
}