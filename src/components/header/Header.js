import React from "react";
import { Col, Input, Row } from "antd";
import Logo from "./Logo";
import lonceng from "../../assets/img/lonceng.png";
import product from "../../assets/img/product.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./Header.scss";

const { Search } = Input;

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <Row align="middle">
          <Col span={4}>
            <Logo />
          </Col>
          <Col span={10}>
            <Search id="search"
              placeholder="Search for good things ..."
              style={{ width: 483 }}
            />
          </Col>
          <Col span={4}>
            <div className="icon">
              <img alt="lonceng" src={product} id="product" />
              <img alt="product" src={lonceng} id="lonceng" />
              <div id="notif"></div>
            </div>
          </Col>
          <Col span={1}>
            <div id="line"></div>
          </Col>
          <Col span={4}>
            <div className="profile">
              <Avatar size={48} icon={<UserOutlined />} id="avatar" />
              <p>Fadel Muhammad</p>
            </div>
          </Col>
        </Row>
      </div >
    </header >
  );
};

export default Header;
