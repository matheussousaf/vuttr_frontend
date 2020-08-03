import React from "react";
import Layout from "@components/Layout/index";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout title="BossaBox Challenge | Very Useful Tools to Remind" />
  </ThemeProvider>
);

export default IndexPage;
