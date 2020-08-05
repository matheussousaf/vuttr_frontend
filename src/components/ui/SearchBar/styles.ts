import styled from "styled-components";
import { calcFontSize } from "src/utils/styles";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled.input`
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 18)};
  padding: 10px 20px;
  outline: none;
  background: #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  border: 1px solid #ebeaed;

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
