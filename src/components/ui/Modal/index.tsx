import React from "react";

import { Container, Overlay, ModalContainer } from "./styles";

interface Props {
  openWhen: any;
  close(): any;
  animation?: string;
}

const Modal: React.FC<Props> = ({ children, openWhen, animation, close }) => {
  if (openWhen) {
    return (
      <Container>
        <Overlay onClick={close} />
        <ModalContainer animation={animation}>{children}</ModalContainer>
      </Container>
    );
  } else {
    return null;
  }
};

export default Modal;
