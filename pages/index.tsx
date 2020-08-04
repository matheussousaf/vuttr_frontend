import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import IndexPage from "@components/layouts/IndexPage";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <IndexPage title="Bossa Box | Very Useful Tools To Remember" />
    </ThemeProvider>
  );
};

export default Index;
