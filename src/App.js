import React from "react";
import { Router } from "@reach/router";
import { Layout } from "antd";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import StartedPage from "./components/startedPage/StartedPage";
import { Home, Login } from "./pages";
import Layout from "./components/layout/Layout";
import { Router } from "@reach/router";

const App = () => {
  return (
      <Header />

      <Content>
        <StartedPage />
            <Router>
             <Login path="/login" />
             <Layout path="/">
             <Home path="/" />
             </Layout>
            </Router>
      </Content>
      <Footer />
  );
};

export default App;
