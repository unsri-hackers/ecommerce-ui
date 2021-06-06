import React from "react";
import { Col, Row } from "antd";
import HeroMobile from "../../assets/img/login-hero-mobile.png";
import HeroDesktop from "../../assets/img/login-hero-desktop.png";
import { Typography } from "antd";
import Logo from "../../components/header/Logo";
import LoginForm from "./components/form/LoginForm";
import "./login.less";
import { Helmet } from "react-helmet";

const { Title, Paragraph } = Typography;

const Login = () => {
  return (
    <Row className="login" justify="center">
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Join us for shopping with pleasant experience"
        />
        <meta charSet="utf-8" />
      </Helmet>
      <Col xs={0} md={3}></Col>
      <Col
        xs={24}
        md={18}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Row className="login-card">
          <Col xs={24} md={12} className="login-hero">
            <div className="login-hero-img">
              <div className="login-logo">
                <Logo />
              </div>
              <picture>
                <source media="(min-width:768px)" srcSet={HeroDesktop} />
                <img src={HeroMobile} alt="Deuvox" />
              </picture>
            </div>
          </Col>
          <Col xs={24} md={12} className="login-main" flex>
            <Title className="login-title">Welcome Back!</Title>
            <Paragraph className="login-subtitle">
              Sign in to your account
            </Paragraph>
            <LoginForm />
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={3}></Col>
    </Row>
  );
};

export default Login;
