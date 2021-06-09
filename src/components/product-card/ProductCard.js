import React from "react";
import { Row, Col, Card, Button, Rate } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useApi } from "../../hooks/useApi";
import mocks from "../../mocks";
import "./ProductCard.less"
const { Meta } = Card;


const ProductCard = () => {
  const { data: products } = useApi("https://deuvox.mocklab.io/api/v1/products", { mock: mocks.productList });
  return (
    <div className="product-card">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={12} >
            <div className="title-product-card">
              Your Product
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
          {mocks.productList && mocks.productList.map(product => (
            <Col sm={{ span: 12 }} xs={{ span: 8 }} xl={{ span: 6 }}>
              <Card
                hoverable
                bordered={false}
                cover={<img alt="product-image" text="4.9" src={product.img} />}
              >
                <Meta title={product.name} description= {`Rp. ${product.price}` } />
              </Card>
              <div className="rate">
                <Rate disabled defaultValue={1} /> <div className="text">4.9</div>
              </div>
            </Col>
          ))}
        </Row>
        <div>
          <h1>Product</h1>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;