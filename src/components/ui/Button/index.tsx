import React from "react";

import { Container, Text } from "./styles";

interface Props {
  text?: string;
  onClick?(): any;
  icon?: any;
  className?: string;
}

const Button: React.FC<Props> = ({
  className,
  text,
  onClick,
  icon,
}) => {
  return (
    <Container className={className} onClick={onClick}>
      {icon ?? null}
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
