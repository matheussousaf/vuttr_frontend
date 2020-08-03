import styled from "styled-components";
import { calcFontSize } from "@utils/styles";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #ebeaed;
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
`;

export const Header = styled.div``;

export const Description = styled.p`
  font-family: Source Sans Pro;
  color: ${(props) => props.theme.colors.dark};
`;

export const Title = styled.p`
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: ${calcFontSize(16, 20)};
  line-height: 2em;
  color: ${(props) => props.theme.colors.dark};
`;
export const Remove = styled.p``;
export const Tags = styled.div``;
