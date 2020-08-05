import React, { useState } from "react";

import { Container, Input } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Search"></Input>
    </Container>
  );
};

export default SearchBar;
