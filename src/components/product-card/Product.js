import React from "react";
import { Row, Col, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useApi } from "../../hooks/useApi";
import mocks from "../../mocks";
import "./ProductCard.less"
import ProductCard from "./component/ProductCard";


const Product = () => {
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
          {products && products.map(product => (
            <Col key={product.id} sm={{ span: 12 }} xs={{ span: 8 }} xl={{ span: 6 }}>
              <a href={product.link}>
                <ProductCard data={product}/>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Product;