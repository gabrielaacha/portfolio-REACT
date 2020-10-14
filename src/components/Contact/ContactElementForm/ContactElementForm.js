import React, { Component } from "react";
import ContactElementFormItemField from "./ContactElementFormItems/ContactElementFormItemField";
import ContactElementFormButton from "./ContactElementFormItems/ContactElementFormButton";
// import Aux from "../../../hoc/Aux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        <ContactElementFormItemField
          onChange={(event) => this.updateField("name", event.target.value)}
          value={this.state.name}
        />
        <ContactElementFormItemField
          onChange={(event) => this.updateField("email", event.target.value)}
          value={this.state.email}
        />
        <ContactElementFormItemField
          textarea={true}
          onChange={(event) => this.updateField("message", event.target.value)}
          value={this.state.message}
        />
        <ContactElementFormButton
          formValues={this.state}
          email="gabriela.gabriela.acha.acha@gmail.com"
        />
      </div>
    );
  }
}
export default Form;
