import React from "react";
import Aux from "../../../hoc/Aux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXingSquare,
} from "@fortawesome/free-brands-svg-icons";

const homeElementIcons = (props) => {
  const urlGithub = "";
  const urlLinkedIn = "";
  const urlXing = "";
  return (
    <Aux>
      <div className="container-main__icons">
        <a href="https://github.com/gabrielaacha">
          <FontAwesomeIcon className="single__icon" icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/gabriela-acha-dev">
          <FontAwesomeIcon className="single__icon" icon={faLinkedin} />
        </a>
        <a href="">
          <FontAwesomeIcon className="single__icon" icon={faXingSquare} />
        </a>
      </div>
    </Aux>
  );
};

export default homeElementIcons;
