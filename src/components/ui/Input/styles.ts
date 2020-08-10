import styled from "styled-components";
import { calcFontSize } from "@utils/styles";

export const Container = styled.div``;

export const StyledInput = styled.input`
  padding: 10px 20px;
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 18)};
  outline: none;
  background: #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  border: none;

  @media (max-width: 768px) {
    width: 85vw;
  }

  &::placeholder {
    color: #b1adb9;
  }

  &:focus-within {
    background: #dedce1;

    &::placeholder {
      color: #8f8a9b;
    }
  }
`;
