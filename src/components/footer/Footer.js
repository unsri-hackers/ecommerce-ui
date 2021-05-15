import React from "react";
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      Copyright &copy; {new Date().getFullYear()}
      <br />
      Made with ❤️ by deuvox
    </AntFooter>
  );
};

export default Footer;
