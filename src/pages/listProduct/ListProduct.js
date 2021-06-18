import React from 'react';
import { Row, Col } from "antd";
import Product from '../../components/product-card/Product'
import './ListProduct.less'

const ListProduct = () => {
  return (
    <div className="list-product">
      <Row>
        <Col span={24}>
          <div className="your-product">
            <Product />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="product-categories">
            <Product />
          </div>
        </Col>
      </Row>
      <Row  >
        <Col span={24}>
          <div className="your-product">
            <Product />
          </div>
        </Col>
      </Row>
    </div >
  )
}
export default ListProduct;