import './App.scss';
import Icon from './components/Icon/Icon';
import EIcon from './consts';
import sneaker from './img/sneakers.jpeg';

export default function App() {
  return (
    <div className="App-container">
      <header className="header">
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
              <li className="header__item">
                <Icon type={EIcon.cart} />
                <span>34$</span>
              </li>
              <li className="header__item"></li>
              <li className="header__item">
                <Icon type={EIcon.avatar} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <h1 className="main__title">All</h1>
        <div className="main__container">
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__descr">
              <div className="card__img-container">
                <img className="card__img" src={sneaker} width={150} height={150} alt="sneaker" />
              </div>
              <p className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas magni error?</p>
            </div>
            <div className="card__bottom">
              <div className="card__cost-container">
                <span className="card__cost-title">Cost:</span>
                <b className="card__cost">3.99$</b>
              </div>
              <button className="card__button">
                <Icon type={EIcon.plus} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}