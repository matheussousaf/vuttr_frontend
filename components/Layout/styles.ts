import styled from "styled-components";
import { Plus } from "@styled-icons/boxicons-regular/Plus";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  justify-content: center;
  display: flex;
  margin: auto;
  background: whitesmoke;
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
  width: 100vh;
`;

export const PlusIcon = styled(Plus)`
  color: white;
`;

export const Cards = styled.div``;