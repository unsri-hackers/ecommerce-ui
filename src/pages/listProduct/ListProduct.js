import React from 'react';
import { Row, Col } from "antd";
import Product from '../../components/product-card/Product'
import OnGoingOrders from '../../components/on-going-orders/OnGoingOrders';
import ProductCategories from '../productCategories/ProductCategories'
import './ListProduct.less'

const ListProduct = () => {
  return (
    <div className="list-product">
      <Row>
        <Col span={24}>
          <div className="on-going-orders">
            <OnGoingOrders />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="product-categories">
            <ProductCategories />
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