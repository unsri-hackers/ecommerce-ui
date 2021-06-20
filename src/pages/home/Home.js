import { Alert, Button } from "antd";
import React from "react";
import { Link } from "@reach/router";
const Home = () => {
  return (
    <>
      <p>Home </p>
      <p style={{ fontWeight: "bold" }}>Home bold </p>
      <p style={{ fontWeight: 300 }}>Home light</p>
      <p style={{ fontStyle: "italic" }}>Home italic</p>
      <Button type="primary" shape="round">
        primary button
      </Button>
      <Link to="/-/dummy">
        <Button type="primary" danger shape="round">
          primary button
        </Button>
      </Link>

      <Alert type="success" message="Error text" banner />
      <Alert type="error" message="Success Tips" banner />
    </>
  );
};

export default Home;
