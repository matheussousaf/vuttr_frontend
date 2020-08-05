import styled from "styled-components";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import Button from "@components/ui/Button";
import Checkbox from "@components/ui/Checkbox";

export const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  height: 100%;
  justify-content: center;
  display: flex;
  margin: auto;
  background: whitesmoke;
  padding: 20px;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  height: 5vh;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 50vw;

  @media (max-width: 1024px) {
    width: 85vw;
  }
`;

export const PlusIcon = styled(Plus)`
  color: white;
`;


export const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    margin-top: 50px;
    width: 100%;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  @media (max-width: 768px) {
    position: absolute;
    top: 55px;
    margin: 0 auto;
  }
`;
