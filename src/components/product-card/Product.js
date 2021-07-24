import React, { useEffect } from "react";
import { Row, Col, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useApi } from "../../hooks/useApi";
import mocks from "../../mocks";
import "./ProductCard.less";
import ProductCard from "./component/ProductCard";
import useAuth from "../../providers/auth/context";

const Product = () => {
  const { reqHeader } = useAuth();
  const { data: products, run: getProducts } = useApi(
    {
      url: "https://deuvox-dev-1.herokuapp.com/api/v1/storefront/products/paging?page=0&size=100",
      method: "get",
      headers: reqHeader,
    },
    { mock: mocks.productList }
  );
  useEffect(() => {
    getProducts();
  }, [reqHeader, getProducts]);
  return (
    <div className="product-card">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="title-product-card">Your Product</div>
          </Col>
          <Col span={12}>
            <Button type="text" className="see-more-text" href="#">
              See More
              <RightOutlined />
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {products &&
            products.result.map((product) => (
              <Col
                key={product.id}
                sm={{ span: 12 }}
                xs={{ span: 8 }}
                xl={{ span: 6 }}
              >
                <a href={product.link}>
                  <ProductCard data={product} />
                </a>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default Product;
