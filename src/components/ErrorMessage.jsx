import React from "react";
import "../styles/ErrorMessage/ErrorMessage.scss";
function ErrorMessage({ message }) {
  return (
    <div className="error_container">
      <div className="message_container">
        <h3>{message}</h3>
      </div>
      <div className="close_message">
        <i className="far fa-times-circle"></i>
      </div>
    </div>
  );
}
export default ErrorMessage;
