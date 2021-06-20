import useRequest from "@ahooksjs/use-request";
import { Col, Row } from "antd";
import "./ProductCategories.less";
import Category from "./component/Category";

const ProductCategories = () => {
    const { data: productCategories } = useRequest("https://4rvey.mocklab.io/api/category");

    return (
        <div className="productCategory">
            <div className="container">
                <Row>
                    {productCategories && productCategories.map((category,i) => (
                        <Col key={`category${i}`}>
                            <Category data={category} />  
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default ProductCategories;