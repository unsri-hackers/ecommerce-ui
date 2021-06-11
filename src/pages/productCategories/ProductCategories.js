import useRequest from "@ahooksjs/use-request";
import { Col, Row, Card } from "antd";
import "./ProductCategories.less";

const ProductCategories = () => {
    const { data: productCategories } = useRequest("https://4rvey.mocklab.io/api/category");

    return (
        <div id="productCategory">
            <div className="container">
                <Row>
                    {productCategories && productCategories.map(category => (
                        <Col>
                            <Card
                                hoverable
                                cover={<img alt={category.name} src={category.image} />}
                                id="card"
                            >
                            <div className="mask">
                                <p id="title">{category.name}</p>
                            </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default ProductCategories;