import React from "react";
import { ErrorWrapper } from "./style";
import { Layout } from "../../components";

const NotFound404 = () => (
  <Layout>
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>404 - Página não encontrada.</p>
    </ErrorWrapper>
  </Layout>
);

export default NotFound404;
