import React from "react";
import Aux from "../../../hoc/Aux";

const mainGridElementCard = (props) => {
  return (
    <Aux>
      {" "}
      <div className="main-grid__col-1-of-3__upper">upper</div>
      <div className="main-grid__col-1-of-3__lower">lower</div>
    </Aux>
  );
};

export default mainGridElementCard;
