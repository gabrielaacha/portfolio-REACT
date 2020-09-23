import React from "react";
// import { Link } from "react-router-dom";
import Aux from "../../../hoc/Aux";
// import MainGridElements from "../../Main/MainGridElements";

const tagsElement = (props) => {
  const { title } = props.info;

  const sayHello = () => {
    alert(`${title}`);
  };

  return (
    <Aux>
      {/* <Link to={`/${title}`}> */}
      <div onClick={sayHello} className="tags__single">
        {title}
      </div>
      {/* </Link> */}
    </Aux>
  );
};

export default tagsElement;
