import React from "react";
import {
  ErrorContainer,
  MessageContainer,
  CloseMessage,
  Icon,
} from "../styles/ErrorMessage";

function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <MessageContainer>
        <h3>{message}</h3>
      </MessageContainer>
      <CloseMessage>
        <Icon className="far fa-times-circle"></Icon>
      </CloseMessage>
    </ErrorContainer>
  );
}
export default ErrorMessage;
