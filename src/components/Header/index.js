import React, { memo } from "react";

import { Container, Content } from "./styles";

function HeaderComponent({ title }) {
  return (
    <Container>
      <Content>
        <h3 data-testid="header-title">{title}</h3>
      </Content>
    </Container>
  );
}

const Header = memo(HeaderComponent);
export default Header;
