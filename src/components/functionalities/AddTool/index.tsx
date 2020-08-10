import React, { useState } from "react";

import {
  Container,
  Title,
  Label,
  Form,
  Field,
  Controls,
  FieldInput,
  FieldTextArea,
} from "./styles";
import Button from "@components/ui/Button";
import Select from "@components/ui/Select";

const AddTool: React.FC = () => {
  return (
    <Container>
      <Form>
        <Title>Add a new Tool</Title>
        <Field>
          <Label>Tool name</Label>
          <FieldInput placeholder="Ex.: Photoshop, Node.js" />
        </Field>
        <Field>
          <Label>Tool Link</Label>
          <FieldInput placeholder="Ex.: https://www.google.com" />
        </Field>
        <Field>
          <Label>Tool Description</Label>
          <FieldTextArea placeholder="A small description telling about your tool" />
        </Field>
        <Field style={{ marginTop: 0 , marginBottom: 20}}>
          <Label>Tags</Label>
          <Select /> 
        </Field>
        <Controls>
          <Button text="Add Tool" />
        </Controls>
      </Form>
    </Container>
  );
};

export default AddTool;
