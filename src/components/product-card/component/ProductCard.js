import React from 'react';
import { Card, Rate } from 'antd';

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <>
      <Card
        hoverable
        bordered={false}
        cover={<img alt={props.data.name} src={props.data.img} />}
      >
        <Meta title={props.data.name} description={`Rp. ${props.data.price}`} />
      </Card>
      <div className="rate">
        <Rate disabled defaultValue={1} />
        <div className="text">4.9</div>
      </div>
    </>
  )
}
export default ProductCard;