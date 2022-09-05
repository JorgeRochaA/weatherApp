import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 50px;
  width: 85%;
  margin-left: 0;
  margin-right: 0;
  margin: auto;
  display: flex;
  background-color: #f44336;
  border: 3px solid #f44336;
  color: white;
  animation: show 1s 1 ease-in forwards;
  @keyframes show {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MessageContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseMessage = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f44336;
`;

export const Icon = styled.div`
  font-size: 2rem;
`;
