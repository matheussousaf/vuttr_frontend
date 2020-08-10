import styled from "styled-components";
import { calcFontSize } from "@utils/styles";

export const StyledTextArea = styled.textarea`
  padding: 10px 20px;
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 18)};
  outline: none;
  background: #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  border: none;
  resize: none;
  width: 100%;
  height: 150px;

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
