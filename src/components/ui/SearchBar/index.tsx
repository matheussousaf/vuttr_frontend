import React, { useState } from "react";
import { Container, SearchIcon, StyledInput }  from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <SearchIcon size={22}></SearchIcon>
      <StyledInput placeholder="Search" />
    </Container>
  );
};

export default SearchBar;
