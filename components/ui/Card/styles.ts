import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #ebeaed;
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
`;

export const Header = styled.div``;

export const Description = styled.p`
  font-family: Source Sans Pro;
  color: ${(props) => props.theme.colors.dark};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 45vw;

  @media (max-width: 768px) {
    max-width: 60vw;
  }
`;

export const Title = styled.p`
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 20px;
  line-height: 2em;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: underline;
  cursor: pointer;
  transition: 100ms ease;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const Remove = styled.p``;
export const Tags = styled.div``;
