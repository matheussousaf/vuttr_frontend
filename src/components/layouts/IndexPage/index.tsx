import React, { useState } from "react";
import Head from "next/head";
import Header from "src/components/ui/Header";
import { GlobalStyle } from "src/styles/global";
import Footer from "src/components/ui/Footer";
import Modal from "src/components/ui/Modal";
import AddTool from "src/components/functionalities/AddTool";
import { Container, Options, Content, PlusIcon, StyledButton } from "./styles";
import { Page } from "src/interfaces";
import SearchTool from "src/components/functionalities/SearchTool";
import ListTools from "src/components/functionalities/ListTools";

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
