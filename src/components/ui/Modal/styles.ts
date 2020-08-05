import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  background: none;
`;

export const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.light};
  border-radius: 5px;
  position: absolute;
  animation: ${fadeIn} 100ms ease-in;
  margin: auto;
  padding: 10px;
`;

export const Overlay = styled.div`
  background: black;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
