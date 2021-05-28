import React from "react";
import { Col, Input, Row } from "antd";
import Logo from "./Logo";

import "./Header.scss";

const { Search } = Input;

const Header = () => {
  return (
    <header id="header" className="container">
      <Row align="middle" justify="space-between">
        <Col span={4}>
          <Logo />
        </Col>
        <Col span={12}>
          <Search
            placeholder="Search for good things"
            style={{ borderRadius: 8, width: 515 }}
          />
        </Col>
        <Col span={4}>
          <p>Profile goes here</p>
        </Col>
      </Row>
    </header>
    
  );
};

export default Header;
