import React from "react";
import styled from "styled-components";

const PreContainer = styled(({ offset, ...props }) => <pre {...props} />)`
  padding: 12px;
  background-color: rgb(246, 248, 255);
  font-family: "Roboto Mono", monospace;
  white-space: initial;
  line-height: 1.5;
  font-size: 14px;

  margin-top: ${props => (props.offset ? -24 : 0)}px;
`;

const Comment = styled.span`
  display: block;
  color: rgb(89, 89, 121);
`;

const Text = styled.span`
  display: block;
  color: ${props => props.theme.secondaryColor};
`;

export default ({ offset, label, text }) => {
  return (
    <PreContainer offset={offset}>
      {label && <Comment># {label}</Comment>}
      <Text>$ {text}</Text>
    </PreContainer>
  );
};
