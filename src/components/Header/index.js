import React from "react";
import styled from "styled-components";

import Nav from "@components/Nav";

const HeaderContainer = styled.header`
  position: relative;
`;

export default () => {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  );
};
