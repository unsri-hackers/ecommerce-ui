import { Form, Input, Select, InputNumber, Upload, Button, Row, Col } from 'antd';
import UploadPhotosPageEmpty from "../../assets/img/Upload-Photos-Page-Empty.png";

import "./upload.less";
const { Option } = Select;

const UploadPage = () => {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className="upload">
            <div className="container">
                <Row>
                    <Col span={12}>
                        <div className="form-upload">
                            <Form
                                layout="vertical"
                                form={form}
                                requiredMark={false}
                                onFinish={onFinish}
                            >
                                <p className="title-item-upload">Item Upload</p>
                                <Form.Item
                                    name="productName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "* Please input name product",
                                        },
                                    ]}
                                >
                                    <p className="label">Product Name *</p>
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="price"
                                    rules={[
                                        {
                                            required: true,
                                            message: '* Price must required',
                                        },
                                    ]}
                                >
                                    <p className="label">Price *</p>
                                    <Input />
                                </Form.Item>

                                <p className="title-item-details">Item Details</p>
                                <Form.Item
                                    name="itemDetails"
                                    rules={[
                                        {
                                            required: true,
                                            message: '* Select Category',
                                        },
                                    ]}
                                >
                                    <p className="label">Category *</p>
                                    <Select defaultValue="Clothes">
                                        <Option value="Clothes">Clothes</Option>
                                        <Option value="shoes">Shoes</Option>
                                        <Option value="pants">pants</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item style={{ marginBottom: 0 }}>
                                    <p className="label">Varian</p>
                                    <Form.Item
                                        style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        style={{ display: 'inline-block', width: 'calc(20% - 8px)', margin: '0 8px' }}
                                    >
                                        <Input placeholder="black" />
                                    </Form.Item>
                                    <Form.Item
                                        style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
                                    >
                                        <Input placeholder="black" />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item className="item-condition-weight-stock" style={{ marginBottom: 0 }}>
                                    <Form.Item
                                        label="Condition *"
                                        className="condition-weight-stock"
                                    >
                                        <Select placeholder="New" allowClear>
                                            <Option>New</Option>
                                            <Option>Second</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="Weight *"
                                        className="condition-weight-stock"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Stock *"
                                        className="condition-weight-stock"
                                    >
                                        <InputNumber />
                                    </Form.Item>

                                </Form.Item>
                                <Form.Item className="description" label="Description" >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Photos Upload *">
                                    <Upload className="button-upload">
                                        <Button>Upload</Button>
                                    </Upload>
                                    <div className="caption-upload">
                                        <p>* Capacity below 2MB on one photo</p>
                                        <p>* Size photo 200 x 200 Pixels</p>
                                    </div>
                                </Form.Item>
                                <Form.Item className="button-submit">
                                    <Button type="primary" htmlType="submit">
                                        Save
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col span={8} offset={4}>
                        <img src={UploadPhotosPageEmpty} alt="Upload-Photos-Page-Empty"/>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default UploadPage;
