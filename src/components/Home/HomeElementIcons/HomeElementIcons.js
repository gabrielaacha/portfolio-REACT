import React from "react";
import Aux from "../../../hoc/Aux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXingSquare,
} from "@fortawesome/free-brands-svg-icons";

const homeElementIcons = (props) => (
  <Aux>
    <div className="container-main__icons">
      <FontAwesomeIcon className="github__icon" icon={faGithub} />
      <FontAwesomeIcon className="github__icon" icon={faLinkedin} />
      <FontAwesomeIcon className="github__icon" icon={faXingSquare} />
    </div>
  </Aux>
);

export default homeElementIcons;
