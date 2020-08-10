import styled, { keyframes, css } from "styled-components";

/**
 * Animations / Animation Function
 */

const bounceIn = keyframes`
    0% {
      transform: translateY(-500px);
      opacity: 0;
    }
    40% {
      transform: translateY(20px);
      opacity: 1;
    }
    
    60% {
      transform: translateY(0px);
      opacity: 1;
    }

    80% {
      transform: translateY(20px);
      opacity: 1;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
`;

const shake = keyframes`
    0% {
      transform: translateX(0px);
      opacity: 0;
    }
    40% {
      transform: translateX(20px);
      opacity: 1;
    }
    
    60% {
      transform: translateX(0px);
      opacity: 1;
    }

    80% {
      transform: translateX(20px);
      opacity: 1;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
`;

function handleAnimation(animationName: string) {
  switch (animationName) {
    case "bounceIn":
      return bounceIn;
    case "shake":
      return shake;
    default:
      return bounceIn;
  }
}

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
interface ModalProps {
  animation?: string;
}

export const ModalContainer = styled.div<ModalProps>`
  background: ${(props) => props.theme.colors.light};
  border-radius: 5px;
  position: absolute;
  margin: auto;
  padding: 10px;
  animation: ${(props) => handleAnimation(props.animation)} 500ms ease-in;
  z-index: 999;
`;

export const Overlay = styled.div`
  background: #170c3ae6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
