import React from "react";
import Aux from "../../hoc/Aux";
import HomeElementIcons from "./HomeElementIcons/HomeElementIcons";

const homeElements = (props) => (
  <Aux>
    <div className="container-main home-elements">
      <p>WELCOME TO MY PAGE!</p>
      <div className="container-main__icons">
        <HomeElementIcons />
      </div>
    </div>
  </Aux>
);

export default homeElements;
