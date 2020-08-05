import React from "react";

import { Text, Container, Bold } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        Made with love by <Bold>Matheus Figueirêdo 💜</Bold>
      </Text>
    </Container>
  );
};

export default Footer;
