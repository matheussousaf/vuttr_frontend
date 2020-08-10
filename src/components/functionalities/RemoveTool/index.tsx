import React from "react";
import Modal from "@components/ui/Modal";

import { Container, Title, Description, Controls } from "./styles";
import Button from "@components/ui/Button";

interface Props {
  openWhen: any;
  close(): any;
}

const RemoveTool: React.FC<Props> = ({ openWhen, close }) => {
  function handleClick() {
    close();
  }

  return (
    <Modal openWhen={openWhen} close={close} animation="shake">
      <Container>
        <Title>Remove Tool</Title>
        <Description>Are you sure you want to remove this tool?</Description>
        <Controls>
          <Button
            onClick={close}
            isDanger
            style={{ marginRight: 20 }}
            text="Cancel"
          />
          <Button
            text="Yes, remove it!"
            onClick={handleClick}
            style={{ width: 200 }}
          />
        </Controls>
      </Container>
    </Modal>
  );
};

export default RemoveTool;
