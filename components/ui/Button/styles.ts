import styled from "styled-components";
import { calcFontSize } from "@utils/styles";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 120px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #2f55cc;
  }

  &:active {
    background: #244AA8;
  }

`;

export const Text = styled.p`
  color: white;
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 17)};
  font-weight: 600;
`;
