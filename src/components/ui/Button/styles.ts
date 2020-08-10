import styled from "styled-components";
import { calcFontSize } from "@utils/styles";

interface ButtonContainerProps {
  isDanger?: boolean;
}

export const Container = styled.div<ButtonContainerProps>`
  background: ${(props) =>
    props.isDanger ? "#F95E5A" : props.theme.colors.primary};
  width: 120px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.isDanger ? "#CC4C4C" : "#2f55cc")};
  }

  &:active {
    background: ${(props) => (props.isDanger ? "#A53F3F" : "#244aa8")};
  }
`;

export const Text = styled.p`
  color: white;
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 17)};
  font-weight: 600;
`;
