import styled from "styled-components";
import { calcFontSize } from "@utils/styles";
import { Search } from "@styled-icons/heroicons-outline/Search";
import Input from "@components/ui/Input/index";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 18)};
  outline: none;
  background: #ebeaed;
  border-radius: 5px;
  color: #170c3a;
  border: 1px solid #ebeaed;
  padding-left: 15px;

  &:focus-within {
    background: #dedce1;
  }
`;

export const SearchIcon = styled(Search)`
  color: #b1adb9;
`;

export const StyledInput = styled(Input)`
  width: 100%;

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 765px) {
    width: 75vw;
  }
`;
