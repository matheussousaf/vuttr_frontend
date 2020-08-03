import React, { useState } from "react";

import { Container, Input } from "./styles";
import Checkbox from "@components/Checkbox";

const SearchBar: React.FC = () => {
  const [tagsOnly, setTagsOnly] = useState(false);

  return (
    <Container>
      <Input placeholder="Search"></Input>
      <Checkbox
        text="Search in tags only"
        value={tagsOnly}
        setValue={() => setTagsOnly(!tagsOnly)}
      />
    </Container>
  );
};

export default SearchBar;
