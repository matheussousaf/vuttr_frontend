import React from "react";

import { Container, Text, CheckContainer, Checked, CheckIcon } from "./styles";

interface Props {
  text?: string;
  value?: any;
  setValue?(): any;
}

const Check: React.FC<Props> = () => {
  return (
    <Checked>
      <CheckIcon size={22} />
    </Checked>
  );
};

const Checkbox: React.FC<Props> = ({ text, value = true, setValue }) => {
  return (
    <Container>
      <CheckContainer onClick={setValue}>
        {value ? <Check /> : null}
      </CheckContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export default Checkbox;
