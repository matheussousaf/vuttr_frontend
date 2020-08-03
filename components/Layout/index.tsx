import React, { ReactNode } from "react";
import Head from "next/head";
import { Container, Options, Content, PlusIcon, Cards } from "./styles";
import Header from "@components/Header";
import { GlobalStyle } from "@styles/global";
import SearchBar from "@components/SearchBar";
import Button from "@components/Button";
import Card from "@components/Card";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = "This is the default title" }: Props) => (
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
          <Button text="Add" icon={<PlusIcon size={25} />} />
        </Options>
        <Cards>
          <Card
            title="Notion"
            description="Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim."
          />
          <Card
            title="json-server"
            description="Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim."
          />
          <Card
            title="fastify"
            description="Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim."
          />
        </Cards>
      </Content>
    </Container>
  </div>
);

export default Layout;
