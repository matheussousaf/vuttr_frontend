import styled from "styled-components";
import Input from "@components/ui/Input";
import TextArea from "@components/ui/TextArea";

export const Container = styled.div`
  padding: 20px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

export const Controls = styled.div`
  margin-left: auto;
`;

export const Field = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FieldInput = styled(Input)`
  width: 100%;
`;

export const FieldTextArea = styled(TextArea)`
  width: 100%;
`;

export const Title = styled.h2`
  color: #170c3a;
  font-family: Source Sans Pro;
`;

export const Label = styled.p``;
