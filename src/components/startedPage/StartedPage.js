import React from 'react';
import 'antd/dist/antd.css';
import { Col, Row, Button } from "antd";
import ilustrationOnlineShopping from "../../assets/img/illustration-online-shopping.png";

import "./startedPage.scss";

const StartedPage = () => {
    return (
        <div className="startedPage">
            <Row align="middle">
                <Col sm={24} md={15}>
                    <div className="description">
                        <h1>Building successful <br /> business just got easier!</h1>
                        <p>You can count on us in making your business go <br /> up and up. Start selling your fascinating <br />products now.</p>
                        <Button id="button">Start Now</Button>
                    </div>
                </Col>
                <Col md={9}>
                    <img alt="ilustration-online-shopping" src={ilustrationOnlineShopping} id="image-ilustration" />
                </Col>
            </Row>
        </div>
    )
}

export default StartedPage;