import React from "react";
import Aux from "../../hoc/Aux";
import ContactElementForm from "./ContactElementForm/ContactElementForm";

const contactElement = (props) => (
  <Aux>
    <div className="container-main contact-elements">
      <p>GET IN TOUCH!</p>
      <div>
        <ContactElementForm />
      </div>
    </div>
  </Aux>
);

export default contactElement;
