import React from "react";
import { Container } from "react-bootstrap";
import { get } from "lodash";
import { ContainerWrapper } from "./style";
import Header from "../header";

const Layout = (props) => {
  const title = get(props, "title", "");
  const children = get(props, "children", null);

  return (
    <>
      <Header />
      <ContainerWrapper>
        <Container fluid>
          <h1 className="page-title">{title}</h1>
          {children}
        </Container>
      </ContainerWrapper>
    </>
  );
};
export default Layout;
