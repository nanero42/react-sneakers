import EIcon from "../../consts";
import Icon from "../Icon";
import sneaker from "../../img/sneakers.jpeg";
import "./index.scss";

export default function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <div className="drawer__title-container">
          <h2 className="drawer__title">Cart</h2>
          <button className="cart__button">
            <Icon type={EIcon.cross} />
          </button>
        </div>
        <div className="drawer__container">
          <ul className="cart__list">
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__img-container">
                <img
                  className="cart__img"
                  src={sneaker}
                  width={150}
                  alt="Sneaker"
                />
              </div>
              <div className="cart__descr">
                <div className="cart__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="cart__cost">3.99$</div>
              </div>
              <div className="cart__button-container">
                <button className="cart__button">
                  <Icon type={EIcon.cross} />
                </button>
              </div>
            </li>
          </ul>
        </div>
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
      </div>
    </div>
  );
}
