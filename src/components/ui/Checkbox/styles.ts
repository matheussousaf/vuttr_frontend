import styled from "styled-components";
import { calcFontSize } from "src/utils/styles";
import { Check as CheckImported } from "@styled-icons/boxicons-regular/Check";

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.dark};
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 18)};
`;

export const CheckContainer = styled.div`
  height: 20px;
  width: 20px;
  background: #ebeaed;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background: #dedce1;
  }
`;

export const Checked = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 19px;
  width: 19px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckIcon = styled(CheckImported)`
    color: white;
`;
