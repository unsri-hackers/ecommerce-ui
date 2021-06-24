import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Col, Row, Button } from "antd";
import SiteContext from "../../providers/site/SiteContext";
import ilustrationOnlineShopping from "../../assets/img/illustration-online-shopping.png";
import { Link } from '@reach/router'


import "./startedPage.less";

const StartedPage = () => {
    const { isMobile } = useContext(SiteContext);

    return (
        <div className="startedPage">
            <Row align="middle">
                <Col sm={24} md={24} lg={14}>
                    <div className="description">
                        <h1>Building successful <br /> business just got easier!</h1>
                        <p>You can count on us in making your business go <br /> up and up. Start selling your fascinating <br />products now.</p>
                        <Link to="/products">
                            <Button id="button">Start Now</Button>
                        </Link>
                    </div>
                </Col>
                <Col lg={10}>
                    <img alt="ilustration-online-shopping" src={ilustrationOnlineShopping} id="image-ilustration" width={isMobile ? 200 : 400} />
                </Col>
            </Row>
        </div>
    );
};

export default StartedPage;
