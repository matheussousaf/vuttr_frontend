import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/ui/Header";
import { GlobalStyle } from "@styles/global";
import SearchBar from "@components/ui/SearchBar";
import Card from "@components/ui/Card";
import Footer from "@components/ui/Footer";
import Modal from "@components/ui/Modal";
import AddTool from "@components/functionalities/AddTool";
import {
  Container,
  Options,
  Content,
  PlusIcon,
  Cards,
  StyledButton,
  Search,
  StyledCheckbox,
} from "./styles";
import { Page } from "interfaces";

const IndexPage: React.FC<Page> = ({ title = "This is the default title" }) => {
  const [newToolModal, toggleNewToolModal] = useState(false);
  const [tagsOnly, setTagsOnly] = useState(false);

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
            <Search>
              <SearchBar />
              <StyledCheckbox
                text="Search in tags only"
                value={tagsOnly}
                setValue={() => setTagsOnly(!tagsOnly)}
              />
            </Search>
            <StyledButton
              text="Add"
              icon={<PlusIcon size={25} />}
              onClick={() => toggleNewToolModal(true)}
            />
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
            <Card
              title="Node.js"
              description="Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim."
            />
            <Card
              title="React"
              description="Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim."
            />
            <Card
              title="Ruby"
              description="Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim. Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim.Cillum reprehenderit elit nulla eu do deserunt cupidatat dolore ex excepteur nisi nostrud ad. Consequat excepteur dolor enim."
            />
          </Cards>
          <Modal
            openWhen={newToolModal}
            close={() => toggleNewToolModal(false)}
          >
            <AddTool></AddTool>
          </Modal>
          <Footer />
        </Content>
      </Container>
    </div>
  );
};

export default IndexPage;
