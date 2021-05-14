import React, { useMemo } from "react";
import { Link } from "@reach/router";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar = () => {
  const menuItems = useMemo(() => [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Login",
      link: "/login",
    },
  ], []);

  return (
    <Header>
      <Menu mode="horizontal" theme="dark">
        {menuItems.map((menuItem, idx) => (
          <Menu.Item key={idx}>
            <Link to={menuItem.link}>{menuItem.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
