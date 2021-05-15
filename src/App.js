import React from "react";
import { Router } from "@reach/router";
import { Layout } from "antd";

import Navbar from "./components/navbar/Navbar";
import { Home, Login } from "./pages";
import Footer from "./components/footer/Footer";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Navbar />

      <Content>
        <Router>
          <Home path="/" />
          <Login path="/login" />
        </Router>
      </Content>

      <Footer />
    </Layout>
  );
};

export default App;
