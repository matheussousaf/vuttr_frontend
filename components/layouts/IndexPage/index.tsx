import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/ui/Header";
import { GlobalStyle } from "@styles/global";
import Card from "@components/ui/Card";
import Footer from "@components/ui/Footer";
import Modal from "@components/ui/Modal";
import AddTool from "@components/functionalities/AddTool";
import { Container, Options, Content, PlusIcon, StyledButton } from "./styles";
import { Page } from "interfaces";
import SearchTool from "@components/functionalities/SearchTool";
import ListTools from "@components/functionalities/ListTools";

const IndexPage: React.FC<Page> = ({ title = "This is the default title" }) => {
  const [newToolModal, toggleNewToolModal] = useState(false);

  return (
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
            <SearchTool />
            <StyledButton
              text="Add"
              icon={<PlusIcon size={25} />}
              onClick={() => toggleNewToolModal(true)}
            />
          </Options>
          <ListTools />
          <Modal
            openWhen={newToolModal}
            close={() => toggleNewToolModal(false)}
          >
            <AddTool />
          </Modal>
          <Footer />
        </Content>
      </Container>
    </div>
  );
};

export default IndexPage;
