import React from "react";

import { Container, Overlay, ModalContainer } from "./styles";

interface Props {
  openWhen: any;
  close(): any;
}

const Modal: React.FC<Props> = ({ children, openWhen, close }) => {
  if (openWhen) {
    return (
      <Container>
        <Overlay onClick={close} />
        <ModalContainer>{children}</ModalContainer>
      </Container>
    );
  } else {
    return null;
  }
};

export default Modal;
