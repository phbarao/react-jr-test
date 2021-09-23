import React from "react";

import { Container, Content } from "./styles";

function Header({ title }) {
  return (
    <Container>
      <Content>
        <h3 data-testid="header-title">{title}</h3>
      </Content>
    </Container>
  );
}

export default Header;
