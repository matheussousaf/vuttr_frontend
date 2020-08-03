import styled from "styled-components";
import { calcFontSize } from "@utils/styles";
import { Check as CheckImported } from "@styled-icons/boxicons-regular/Check";

export const Container = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.dark};
  font-family: Source Sans Pro;
  font-size: ${calcFontSize(16, 20)};
`;

export const CheckContainer = styled.div`
  height: 25px;
  width: 25px;
  background: #ebeaed;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background: #dedce1;
  }
`;

export const Checked = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 24px;
  width: 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckIcon = styled(CheckImported)`
    color: white;
`;
