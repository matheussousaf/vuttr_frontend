import styled from "styled-components";
import Checkbox from "@components/ui/Checkbox";


export const Search = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const StyledCheckbox = styled(Checkbox)`
  @media (max-width: 768px) {
    position: absolute;
    top: 55px;
    margin: 0 auto;
  }
`;