import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.dark};
`;

export const Bold = styled.span`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border-bottom-width: 1.5px;
    border-bottom-color: ${(props) => props.theme.colors.dark};
    border-bottom-style: solid;
  }
`;
