import { useContext, useState } from "react";
import { ContextCartSneakers, ContextSearchSneaker } from "../../App";
import EIcon from "../../consts";
import Icon from "../Icon";
import "./index.scss";
import { useEffect } from "react";

export default function Card({sneaker}) {

  const { image, descr, cost} = sneaker;
  const id = +sneaker.id;

  const {cartSneakers, setCartSneakers} = useContext(ContextCartSneakers);
  const {searchSneaker, setSearchSneaker} = useContext(ContextSearchSneaker);

  const [isSneakerAdded, setIsSneakerAdded] = useState(false);

  const toggleIsSneakerAdded = () => {
    setIsSneakerAdded(!isSneakerAdded);
  }

  const toggleSneakerIntoCart = sneaker => {
    setCartSneakers(prev => {
      const isSneakerAlreadyAdded = prev.some(p => p.id === sneaker.id);

      if (isSneakerAlreadyAdded) {
        return [...prev].filter(p => p.id !== sneaker.id);
      }

      return [...prev, sneaker];
    });
  }

  // useEffect(() => {
  //   const restoredLocalStorage = JSON.parse(window.localStorage.getItem('cartSneakers'));
  //   if (restoredLocalStorage?.length) setCartSneakers(restoredLocalStorage);
  // }, []);

  useEffect(() => {
    window.localStorage.setItem('cartSneakers', JSON.stringify(cartSneakers));
  }, [cartSneakers]);

  const highlightText = () => {
    if (searchSneaker) {
      const firstText = descr.slice(0, descr.indexOf(searchSneaker));
      const highlightedSpan = <span className="highlited_text">{searchSneaker}</span>;
      const secondText = descr.slice(descr.indexOf(searchSneaker) + searchSneaker.length);

      return <span>{firstText}{highlightedSpan}{secondText}</span>;
    }

    return descr;
  }

  return (
    <div className="card">
      <div className="card__descr">
        <div className="card__img-container">
          <button className="card__favorite">
            <Icon type={EIcon.favorite}/>
          </button>
          <img
            className="card__img"
            src={image}
            width={150}
            height={150}
            alt="sneaker"
          />
        </div>
        <p className="card__paragraph">{highlightText()}</p>
      </div>
      <div className="card__bottom">
        <div className="card__cost-container">
          <span className="card__cost-title">Cost:</span>
          <b className="card__cost">{cost}</b>
        </div>
        <button
          className="card__button"
          onClick={() => {
            toggleSneakerIntoCart({id, image, descr, cost});
            toggleIsSneakerAdded();
          }}
        >
          <Icon type={isSneakerAdded ? EIcon.done : EIcon.plus} />
        </button>
      </div>
    </div>
  );
}