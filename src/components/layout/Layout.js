import React from "react";
import { Content } from "antd/lib/layout/layout";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (Children) => {
  return (props) => (
    <>
      <Header />
      <Content>
        <Children {...props} />
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
