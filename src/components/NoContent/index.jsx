import EIcon from "../../consts";
import Icon from "../Icon";
import "./index.scss";

export default function NoContent({ type, width, height, fill }) {

  const icon = <Icon type={EIcon[type]} width={width} height={height} fill={fill}/>;

  const renderTemplate = () => {

    if (type === EIcon.emptyCart) {
      return(
        <>
          <h1 className="no-content__title">Cart is empty</h1>
          <p>Add at least a one pair of sneakers to make an order</p>
        </>
      );
    }

    if (type === EIcon.noData) {
      return(
        <>
          <h1 className="no-content__title">No data available</h1>
        </>
      );
    }
  }

  return(
    <div className="no-content">
      {icon}
      {renderTemplate()}
    </div>
  );
}