import axios from "axios";
import EIcon from "../../consts";
import Icon from "../Icon";
import NoContent from "../NoContent";
import "./index.scss";

export default function Drawer({
  cartSneakers,
  setCartSneakers,
  isCartOpen,
  setIsCartOpen,
}) {
  document.addEventListener("keyup", (event) => {
    event.key === "Escape" && closeDrawer();
  });
  document.querySelector(".overlay")?.addEventListener("click", (event) => {
    event.target?.classList?.contains("overlay") && closeDrawer();
  });

  const closeDrawer = (event) => {
    setIsCartOpen(!isCartOpen);
  };

  const deleteSneakerFromCart = async (id) => {
    await axios.delete(`https://635a769c6f97ae73a62d5445.mockapi.io/cart/${id}`);
    setCartSneakers((prev) => prev.filter((p) => p.id !== id));
  };

  const sneakersItems = cartSneakers?.map((item, idx) => {
    return (
      <li key={idx} className="cart__item">
        <div className="cart__img-container">
          <img
            className="cart__img"
            src={item.image}
            width={150}
            alt="Sneaker"
          />
        </div>
        <div className="cart__descr">
          <div className="cart__paragraph">{item.descr}</div>
          <div className="cart__cost">{item.cost}</div>
        </div>
        <div className="cart__button-container">
          <button
            className="cart__button"
            onClick={() => deleteSneakerFromCart(item.id)}
          >
            <Icon type={EIcon.cross} />
          </button>
        </div>
      </li>
    );
  });

  const totlaPriceHTML = (
    <div className="drawer__order-container">
      <div className="drawer__cost">
        <div className="drawer__sum drawer__row">
          <div className="drawer__unbreakable_text">Total:</div>
          <span className="drawer__dashes"></span>
          <div className="drawer__unbreakable_text">3.99$</div>
        </div>
        <div className="drawer__tax drawer__row">
          <div className="drawer__unbreakable_text">Tax 5%:</div>
          <span className="drawer__dashes"></span>
          <div className="drawer__unbreakable_text">4.5$</div>
        </div>
      </div>
      <button className="drawer__button-order">
        <span className="drawer__button-text">Make a request</span>
        <div className="drawer__button-icon">
          <Icon type={EIcon.arrowRight} />
        </div>
      </button>
    </div>
  );

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__title-container">
          <h2 className="drawer__title">Cart</h2>
          <button className="cart__button" onClick={closeDrawer}>
            <Icon type={EIcon.cross} />
          </button>
        </div>
        <div className="drawer__container">
          <ul className="cart__list">
            {sneakersItems.length ? (
              sneakersItems
            ) : (
              <NoContent type={EIcon.emptyCart} />
            )}
          </ul>
        </div>
        {sneakersItems.length ? totlaPriceHTML : null}
      </div>
    </div>
  );
}
