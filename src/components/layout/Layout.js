import { Content } from "antd/lib/layout/layout";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
