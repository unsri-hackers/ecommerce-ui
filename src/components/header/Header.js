import React from "react";
import { Col, Input, Row } from "antd";
import Logo from "./Logo";
import notificationIcon from "../../assets/img/notificationIcon.png";
import addNewProduct from "../../assets/img/add-new-product.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

import "./Header.scss";

const { Search } = Input;

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <Row align="middle">

          <Col xs={9} sm={7} md={4} lg={4}>
            <Logo />
          </Col>

          <Col xs={0} sm={0} md={6} lg={9}>
            <Search id="search"
              placeholder="Search for good things ..."
            />
          </Col>

          <Col xs={8} sm={7} md={6} lg={5}>
            <div className="icon">
              <Badge>
                <img alt="add-new-product" src={addNewProduct} id="addNewProduct" />
              </Badge>
              <Badge count={0} showZero color="yellow">
                <img alt="notificationIcon" src={notificationIcon} id="notificationIcon" />
              </Badge>
            </div>
          </Col>

          <Col xs={1} sm={1} md={1} lg={1}>
            <div id="line"></div>
          </Col>

          <Col xs={6} sm={9} md={7} lg={5}>
            <div className="profile">
              <Avatar size={48} icon={<UserOutlined />} id="avatar" />
              <p>Fadel Muhammad</p>
            </div>
          </Col>

        </Row>
      </div>
    </header>
  );
};

export default Header;
