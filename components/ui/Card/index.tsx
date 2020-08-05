import React from "react";
import { Close } from "@styled-icons/evaicons-solid/Close";

import {
  Container,
  Header,
  Title,
  Remove,
  RemoveContainer,
  Tags,
  Tag,
  Description,
} from "./styles";
import { Tool } from "interfaces";

const Card: React.FC<Tool> = ({ title, description, tags }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <RemoveContainer>
          <Close size={22} color={"#F95E5A"} />
          <Remove>Remover</Remove>
        </RemoveContainer>
      </Header>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </Tags>
    </Container>
  );
};

export default Card;
