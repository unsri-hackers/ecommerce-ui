import React from "react";
import { Card } from "antd";
import starIcon from "../../../assets/img/ic_star.svg";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <>
      <Card
        hoverable
        bordered={false}
        cover={<img alt={props.data.itemName} src={props.data.img} />}
      >
        <Meta
          title={props.data.itemName}
          description={`Rp. ${props.data.price}`}
        />
      </Card>
      <div className="rate">
        <div className="star-icon">
          <img alt="star-icon" src={starIcon} className="star-icon" />
        </div>
        <div className="text">4.9</div>
      </div>
    </>
  );
};
export default ProductCard;
