import React, { useState } from "react";
import { Search, StyledCheckbox } from "./styles";
import SearchBar from "src/components/ui/SearchBar";

const SearchTool: React.FC = () => {
  const [tagsOnly, setTagsOnly] = useState(false);

  return (
    <Search>
      <SearchBar />
      <StyledCheckbox
        text="Search in tags only"
        value={tagsOnly}
        setValue={() => setTagsOnly(!tagsOnly)}
      />
    </Search>
  );
};

export default SearchTool;
