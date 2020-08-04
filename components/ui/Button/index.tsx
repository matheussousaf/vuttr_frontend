import React from "react";

import { Container, Text } from "./styles";

interface Props {
  text?: string;
  onClick?(): any;
  icon?: any;
}

const Button: React.FC<Props> = ({ text, onClick, icon }) => {
  return (
    <Container onClick={onClick}>
      {icon ?? null}
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
