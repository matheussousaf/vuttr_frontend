import React, { CSSProperties } from "react";

import { Container, Text } from "./styles";

interface Props {
  text?: string;
  onClick?(): any;
  icon?: any;
  className?: string;
  style?: CSSProperties;
  isDanger?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  text,
  onClick,
  icon,
  style,
  isDanger,
}) => {
  return (
    <Container
      isDanger={isDanger}
      style={style}
      className={className}
      onClick={onClick}
    >
      {icon ?? null}
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
