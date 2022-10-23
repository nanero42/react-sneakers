import EIcon from "../../consts";
import Icon from "../Icon";
import sneaker from '../../img/sneakers.jpeg';
import './index.scss';

export default function Card() {
  return <div className="card">
    <div className="card__descr">
      <div className="card__img-container">
        <button className="card__favorite">
          <Icon type={EIcon.favorite}/>
        </button>
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
}