import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  width: 500px;

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Title = styled.h2``;

export const Description = styled.p`
  margin: 20px 0;
`;
