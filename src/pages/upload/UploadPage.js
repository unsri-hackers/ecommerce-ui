import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber, Upload, Button } from 'antd';

import "./upload.less";
const { Option } = Select;

const UploadPage = () => {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);
    useEffect(() => {
        form.validateFields([]);
    }, [checkNick]);

    const onCheckboxChange = (e) => {
        setCheckNick(e.target.checked);
    };

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };
    return (
        <div className="container">
            <Form layout="vertical">

                <h1>Item Upload</h1>
                <Form.Item
                    name="nama"
                    label="Product Name *"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                        }
                    ]}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item 
                    name
                    label="Price *"
                    
                    >
                    <Input placeholder="input placeholder" />
                </Form.Item>

                <h1>Item Details</h1>
                <Form.Item label="Category *" rules={[{ required: true, },]}>
                    <Select placeholder="Clothes" allowClear>
                        <Option value="Clothes">Clothes</Option>
                        <Option value="shoes">Shoes</Option>
                        <Option value="pants">pants</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Varian" style={{ marginBottom: 0 }}>
                    <Form.Item
                        style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
                    >
                        <Input placeholder="varians" />
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

                <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                        label="Condition *"
                        style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
                    >
                        <Select placeholder="New" allowClear>
                            <Option>New</Option>
                            <Option>Second</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Weight *"
                        style={{ display: 'inline-block', width: 'calc(20% - 8px', margin: '0 8px' }}
                    >
                        <Input></Input>
                    </Form.Item>
                    <Form.Item
                        label="Stock *"
                        style={{ display: 'inline-block', width: 'calc(20% - 8px' }}
                    >
                        <InputNumber />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Description">
                    <Input />
                </Form.Item>
                <Form.Item label="Photos Upload *">
                    <Upload>
                        <Button>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={onCheck}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UploadPage;