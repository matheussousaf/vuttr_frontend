import styled from "styled-components";
import { calcFontSize } from "@utils/styles";

export const Container = styled.div`
  margin: 2vw 0px;
  padding: 20px 0;
`;

export const Title = styled.h1`
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: ${calcFontSize(30, 48)};
  color: ${(props) => props.theme.colors.dark};
`;

export const SubTitle = styled.p`
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(20, 30)};
  margin-top: 0.5em;
  color: ${(props) => props.theme.colors.dark};
`;
