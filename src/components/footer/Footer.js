import React from "react";
import { Col, Row, Tooltip } from "antd";
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
                <p>Situs jual beli online yang menghubungkan kamu dengan penjual terpercaya di Indonesia, dan menyediakan semua kebutuhanmu. Belanja online jadi lebih mudah dan terpercaya dengan Deuvox. Cek Sekarang!</p>
              </div>
            </Col>
            <Col
              xl={{ span: 6 }}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
            >
              <div className="footer-col">
                  <h4 className="title">Services</h4>
                <ul>
                  <Tooltip placement="topLeft" title="Coming soon">
                    <li>Products</li>
                  </Tooltip>
                  <Tooltip placement="topLeft" title="Coming soon">
                    <li>Shop Now</li>
                  </Tooltip>
                  <Tooltip placement="topLeft" title="Coming soon">
                    <li>Safe Payments</li>
                  </Tooltip>
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
                <Tooltip placement="topLeft" title="Coming soon">
                  <h4 className="title">Explore Us</h4>
                </Tooltip>
                <ul>
                  <Tooltip placement="topLeft" title="Coming soon">
                    <li>About</li>
                  </Tooltip>
                  <Tooltip placement="topLeft" title="Coming soon">
                    <li>Privacy Policy</li>
                  </Tooltip>
                  <Tooltip placement="topLeft" title="Coming soon">
                    <li>Terms &amp; Conditions</li>
                  </Tooltip>
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
