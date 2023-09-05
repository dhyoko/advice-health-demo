import React from "react";
import { Container } from "react-bootstrap";
import { ContainerWrapper } from "./style";

const MainContainer = ({ children }) => (
  <ContainerWrapper>
    <Container fluid>{children}</Container>
  </ContainerWrapper>
);

export default MainContainer;
