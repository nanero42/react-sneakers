import { useContext } from "react";
import { ContextSearchSneaker } from "../../App";
import EIcon from "../../consts";
import Icon from "../Icon";
import "./index.scss";

export default function Search() {
  const { searchSneaker, setSearchSneaker } = useContext(ContextSearchSneaker);

  const onInput = (event) => {
    setSearchSneaker(event.target.value.trim());
  };

  const clearInput = () => setSearchSneaker("");

  return (
    <div className="search">
      <Icon type={EIcon.search} />
      <input
        className="search__input"
        value={searchSneaker}
        type="text"
        placeholder="Search..."
        onInput={onInput}
      />
      <div className="search__icon" onClick={clearInput}>
        <Icon type={searchSneaker && EIcon.cross} width={12} height={12} />
      </div>
    </div>
  );
}
