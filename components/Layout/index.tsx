import React, { ReactNode } from "react";
import Head from "next/head";
import { Container, Options, Content } from "./styles";
import Header from "@components/Header";
import { GlobalStyle } from "@styles/global";
import SearchBar from "@components/SearchBar";
import Checkbox from "@components/Checkbox";
import Button from "@components/Button";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <GlobalStyle />
      <Content>
        <Header />
        <Options>
          <SearchBar />
          <Button />
        </Options>
      </Content>
    </Container>
  </div>
);

export default Layout;
