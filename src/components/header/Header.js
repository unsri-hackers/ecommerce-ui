import React from "react";
import { Avatar, Badge, Col, Input, Row } from "antd";
import Logo from "./Logo";
import notificationIcon from "../../assets/img/notificationIcon.png";
import addNewProduct from "../../assets/img/add-new-product.png";
import { UserOutlined } from "@ant-design/icons";
import useAuth from "../../providers/auth/context";
import "./Header.less";
import { Link } from "@reach/router";

const { Search } = Input;

const Header = () => {
  const { authUser } = useAuth();
  return (
    <header id="header">
      <div className="container">
        <Row align="middle" justify="center">
          <Col xs={0} sm={0} md={4}>
            <Link to="/">
              <Logo />
            </Link>
          </Col>

          <Col xs={5} sm={0}>
            <Avatar size={48} icon={<UserOutlined />} id="avatar" />
          </Col>

          <Col xs={12} sm={7} md={7}>
            <Search id="search" placeholder="Search for good things ..." />
          </Col>

          <Col xs={7} sm={7} md={5}>
            <div className="icon">
              <Badge>
                <img
                  alt="add-new-product"
                  src={addNewProduct}
                  id="addNewProduct"
                />
              </Badge>
              <Badge count={0} showZero color="yellow">
                <img
                  alt="notificationIcon"
                  src={notificationIcon}
                  id="notificationIcon"
                />
              </Badge>
            </div>
          </Col>

          <Col xs={0} sm={1} md={1}>
            <div id="line"></div>
          </Col>

          <Col xs={0} sm={9} md={7}>
            <div className="profile">
              <Avatar size={48} icon={<UserOutlined />} id="avatar" />
              <p>{authUser && authUser}</p>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
