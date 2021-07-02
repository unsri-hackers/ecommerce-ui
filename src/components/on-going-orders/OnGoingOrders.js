import React from "react";
import { Row, Col, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import OnGoingOrdersCard from "./component/OnGoingOrdersCard";
import "./OnGoingOrders.less"

const OnGoingOrders = () => {
  return (
    <div className="on-going-orders">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={12} >
            <div className="title-on-going-orders">
              On Going Orders
            </div>
          </Col>
          <Col span={12} >
            <Button
              type="text"
              className="see-more-text"
              href="#"
            >
              See More
              <RightOutlined />
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col sm={{ span: 12 }} xs={{ span: 8 }} xl={{ span: 6 }}>
                <OnGoingOrdersCard />
            </Col>
            <Col sm={{ span: 12 }} xs={{ span: 8 }} xl={{ span: 6 }}>
                <OnGoingOrdersCard />
            </Col>
            <Col sm={{ span: 12 }} xs={{ span: 8 }} xl={{ span: 6 }}>
                <OnGoingOrdersCard />
            </Col>
        </Row>
      </div>
    </div>
  );
};
export default OnGoingOrders;