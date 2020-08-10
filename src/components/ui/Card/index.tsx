import React, { useState } from "react";
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
import { Tool } from "@interfaces/index";
import RemoveTool from "@components/functionalities/RemoveTool";

const Card: React.FC<Tool> = ({ title, description, tags }) => {
  const [removeModal, toggleRemoveModal] = useState(false);

  function removeItem() {
    toggleRemoveModal(true);
  }

  return (
    <>
      <Container>
        <Header>
          <Title>{title}</Title>
          <RemoveContainer onClick={removeItem}>
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
      <RemoveTool openWhen={removeModal} close={() => toggleRemoveModal(false)} />
    </>
  );
};

export default Card;
