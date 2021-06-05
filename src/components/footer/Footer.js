import React from "react";
import { Col, Row } from "antd";
import Logo from "../header/Logo";

import "./Footer.less";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <Row align="middle">
            <Col
              xl={{ span: 6 }}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
            >
              <div className="footer-col-logo">
                <div className="logo-footer">
                  <Logo />
                </div>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor elit</p>
              </div>
            </Col>
            <Col
              xl={{ span: 6 }}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
            >
              <div className="footer-col">
                <h4 className="title">Lorem, ipsum</h4>
                <ul>
                  <li>Dolor sit amet</li>
                  <li>Constect elit</li>
                  <li>Payments</li>
                </ul>
              </div>
            </Col>
            <Col
              xl={{ span: 6 }}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
            >
              <div className="footer-col">
                <h4 className="title">Explore Us</h4>
                <ul>
                  <li>About</li>
                  <li>Privacy Policy</li>
                  <li>Terms &amp; Conditions.</li>
                </ul>
              </div>
            </Col>
            <Col
              xl={{ span: 6 }}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
            >
              <div className="footer-col">
                <h4 className="title">Get in Touch</h4>
                <ul>
                  <li>support@deuvox.com</li>
                  <li>0711 - 7902 - 0382</li>
                  <li>Deuvox, Palembang</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span={24}>
            <div className="footer-bottom">
              <p>Copyright 2021 &bull; All rights reserved &bull; Deuvox</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
