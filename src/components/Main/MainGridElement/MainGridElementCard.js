import React from "react";
import Aux from "../../../hoc/Aux";

const mainGridElementCard = (props) => {
  console.log(props.info);
  const { image, shortDescription, projectName } = props.info;

  return (
    <Aux>
      <div className="main-grid__col-1-of-3__items">
        <div className="main-grid__col-1-of-3__upper">
          <img alt={projectName} src={image} className="main-grid__image" />
        </div>
        <div className="main-grid__col-1-of-3__lower">{shortDescription}</div>
      </div>
    </Aux>
  );
};

export default mainGridElementCard;
