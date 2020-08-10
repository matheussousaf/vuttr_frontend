import React, { TextareaHTMLAttributes } from "react";

import { StyledTextArea } from "./styles";

const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...props
}) => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
