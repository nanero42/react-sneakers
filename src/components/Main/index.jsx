import EIcon from "../../consts";
import getCssVariable from "../../utils";
import Card from "../Card";
import Icon from "../Icon";
import "./index.scss";

export default function Main() {
  return <main className="main">
    <div className="title__container">
      <h1 className="title">All</h1>
      <div className="search">
        <Icon type={EIcon.search} fill={getCssVariable('--color-border')}/>
        <input className="search__input" type="text" placeholder="Search..." />
      </div>
    </div>
    <div className="main__container">
      <Card />
    </div>
  </main>
}