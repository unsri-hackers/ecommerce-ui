import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const OnGoingOrdersCard = (props) => {
  return (
    <>
      <Card
        bordered={false}>
        <img className="img-1" alt="thumbnail" src="https://placeimg.com/270/180/any" />
        <img className="img-2" alt="thumbnail" src="https://placeimg.com/270/180/any" />
        <img className="img-3" alt="thumbnail" src="https://placeimg.com/270/180/any" />
        <Meta title="Barney Stinson" description="Due to 29 May 2021" />
      </Card>
    </>
  )
}
export default OnGoingOrdersCard;