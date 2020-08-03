import React from "react";

import { Container, Header, Title, Remove, Tags, Description } from "./styles";

interface Props {
  title?: string;
  tags?: string[];
  description?: string;
}

const Card: React.FC<Props> = ({ title, description, tags }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Remove />
      </Header>
      <Description>{description}</Description>
      <Tags />
    </Container>
  );
};

export default Card;
