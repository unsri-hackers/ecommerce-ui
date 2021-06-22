import React from 'react';
import { Card } from 'antd';

const Category = (props) => {
    return (
        <>
            <Card
                hoverable
                cover={<img alt={props.data.name} src={props.data.image} />}
                className="categoryCard"
            >
                <div className="mask">
                    <p className="title">{props.data.name}</p>
                </div>
            </Card>
        </>
    )
}

export default Category;