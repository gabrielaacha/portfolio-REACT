// Dependencies
import React, { PropTypes } from "react";

// Stateless component / Functional component
const ContactElementFormItemField = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      type={props.textarea ? "textarea" : "text"}
      value={props.value}
    />
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
// ContactElementFormItemField.propTypes = {
//   label: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   textarea: PropTypes.bool.isRequired,
//   value: PropTypes.string.isRequired,
// };

// ContactElementFormItemField.defaultProps = {
//   textarea: false,
// };

export default ContactElementFormItemField;
