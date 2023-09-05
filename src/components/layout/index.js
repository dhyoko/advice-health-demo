import React from "react";
import { Container } from "react-bootstrap";
import { ContainerWrapper } from "./style";
import Header from "../header";

const Layout = ({ children }) => (
  <>
    <Header />
    <ContainerWrapper>
      <Container fluid>{children}</Container>
    </ContainerWrapper>
  </>
);

export default Layout;
