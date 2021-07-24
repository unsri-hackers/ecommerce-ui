import React from "react";
import { Card, Image } from "antd";
import starIcon from "../../../assets/img/ic_star.svg";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <>
      <Card
        hoverable
        bordered={false}
        cover={
          <Image
            alt={props.data.productName}
            src={
              props.data.photos.length > 0 ? props.data.photos[0].path : "error"
            }
            fallback="https://res.cloudinary.com/deuvox/image/upload/v1625834869/deuvox-products/fallback_sgy85o.png"
          />
        }
      >
        <Meta
          title={props.data.productName}
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
