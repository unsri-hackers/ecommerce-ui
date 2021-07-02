import React, { useEffect, useState } from "react";
import { Form, Input, Select, InputNumber, Button, Row, Col } from 'antd';
import UploadPhotosPageEmpty from "../../assets/img/Upload-Photos-Page-Empty.png";
import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "../../utils/CloudinaryService";
import { Helmet } from "react-helmet";

import "./upload.less";
const { Option } = Select;

const UploadPage = () => {
    const [form] = Form.useForm();
    useEffect(() => {
        console.log("form", form);
    }, [form]);
    const [image, setImageURL] = useState();


    const beginUpload = () => {

        const uploadOptions = {
            cloudName: "deuvox",
            tags: [tag],
            uploadPreset: "deuvox-products-unsigned",
            maxFiles: 10,
        };

        openUploadWidget(uploadOptions, (error, result) => {
            if (!error) {
                if (result.event === "success") {
                    console.log(result.info);
                    setImageURL(result.info.secure_url);
                    /*
                    Check deuvox API
                    {
                        "productName": ...
                        ...
                        "photos": [
                            {
                                "path": "https://...",
                                "name": "asd"
                            },
                            {
                                "path": "https://...",
                                "name": "asd"
                            }
                        ]
                    }
                    */
                    form.setFieldsValue({"photos": [
                        ...form.getFieldValue("photos"), upload.array()
                        // {
                        //     "path": result.info.secure_url,
                        //     "name": result.info.name, // ?
                        // }
                    ]
                }
                );
                }
            } else {
                alert(error);
            }
        }
        );
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFieldsChange = (changedFields, allFields) => {
        console.log(changedFields, allFields);
    }

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            xl: 24,
            md: 18,
            xs: 24,
        },
    };

    return (
        <>
            <Helmet>
                <script
                    src="https://widget.cloudinary.com/v2.0/global/all.js"
                    type="text/javascript"
                ></script>
            </Helmet>

            <div className="upload">
                <div className="container">
                    <Row>
                        <Col xl={14} md={11} sm={24}>
                            <div className="form-upload">
                                <Form
                                    {...layout}
                                    layout="vertical"
                                    form={form}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    onFieldsChange={onFieldsChange}
                                >
                                    <p className="title-item-upload">Item Upload</p>
                                    <Form.Item label="Product *">
                                        <Form.Item
                                            name="productName"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "* Please input name product",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Form.Item>

                                    <Form.Item label="Price *">
                                        <Form.Item
                                            name="price"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '* Price must required',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Form.Item>

                                    <p className="title-item-details">Item Details</p>
                                    <Form.Item label="Category *">
                                        <Form.Item
                                            name="itemDetails"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '* Select Category',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Clothes">
                                                <Option value="Clothes">Clothes</Option>
                                                <Option value="shoes">Shoes</Option>
                                                <Option value="pants">pants</Option>
                                            </Select>
                                        </Form.Item>
                                    </Form.Item>

                                    <Form.Item style={{ marginBottom: 0 }}>
                                        <p className="label">Variant</p>
                                        <Select mode="tags" style={{ width: '100%' }} onChange={handleChange}>
                                            {children}
                                        </Select>,
                                    </Form.Item>

                                    <Form.Item style={{ marginBottom: 0 }}>
                                        <Form.Item
                                            label="Condition *"
                                            style={{ display: 'inline-block', width: 'calc(25% - 5px)' }}
                                        >
                                            <Select allowClear>
                                                <Option value="New">New</Option>
                                                <Option value="Second">Second</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            label="Weight *"
                                            style={{ display: 'inline-block', width: 'calc(25% - 5px)', marginLeft: 30 }}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Stock *"
                                            style={{ display: 'inline-block', width: 'calc(25% - 5px)', marginLeft: 30 }}
                                        >
                                            <InputNumber />
                                        </Form.Item>

                                    </Form.Item>
                                    <Form.Item className="description" label="Description" >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item name="photos"/>
                                    <Form.Item label="Photos Upload *">
                                        <div className="button-upload">
                                            <CloudinaryContext cloudName="deuvox"></CloudinaryContext>
                                            {/* <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input> */}
                                            <Button onClick={() => beginUpload()}>Upload</Button>
                                        </div>
                                        {/* <img alt="tes" src={url} /> */}
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
                        <Col xl={10} md={13}>
                            <img src={UploadPhotosPageEmpty} alt="Upload-Photos-Page-Empty" />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default UploadPage;
