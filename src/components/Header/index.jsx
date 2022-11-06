import EIcon from "../../consts";
import Icon from "../Icon";
import './index.scss';

export default function Header({isCartOpen, setIsCartOpen}) {

  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return <header className="header">
    <div className="header__container">
      <div className="header__logo-container">
        <Icon type={EIcon.logo} width={32} height={32} />
        <div className="header__title-container">
          <h3 className="header__title">react sneakers</h3>
          <div className="header__paragraph">Best sneakers shop</div>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item header__item-cup" onClick={openCart}>
            <div className="header__item-icon">
              <Icon type={EIcon.cart} />
            </div>
            <span>34$</span>
          </li>
          <li className="header__item">
            <Icon type={EIcon.favorite} />
          </li>
          <li className="header__item">
            <Icon type={EIcon.avatar} />
          </li>
        </ul>
      </nav>
    </div>
  </header>
}