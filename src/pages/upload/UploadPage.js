import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Row,
  Col,
  Upload,
  Alert,
  message,
} from "antd";
import UploadPhotosPageEmpty from "../../assets/img/Upload-Photos-Page-Empty.png";
import { UploadOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import useAuth from "../../providers/auth/context";
import "./upload.less";
import { useApi } from "../../hooks/useApi";
import { navigate } from "@reach/router";
import mocks from "../../mocks";
const { Option } = Select;

const UploadPage = () => {
  const [form] = Form.useForm();
  const { reqHeader } = useAuth();
  const [imageList, setImageList] = useState([]);
  const [imageListUrl, setImageListUrl] = useState([]);
  const {
    run: uploadProduct,
    loading,
    error,
  } = useApi(
    (values) => {
      console.log(values);
      return {
        url: "https://deuvox-dev-1.herokuapp.com/api/v1/storefront/products",
        method: "post",
        body: JSON.stringify({
          productName: values.productName,
          price: values.price,
          photos: values.photos,
        }),
        headers: reqHeader,
      };
    },
    {
      manual: true,
      throwOnError: true,
      onSuccess: ({ result }, params) => {
        navigate("/products");
      },
      mock: mocks.uploadProduct,
    }
  );
  const onFinish = (values) => {
    uploadProduct({ ...values, photos: imageListUrl });
  };

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
  console.log(imageListUrl);
  const props = {
    action: "https://api.cloudinary.com/v1_1/deuvox/image/upload",
    data: {
      upload_preset: "deuvox-products-unsigned",
      cloud_name: "deuvox",
    },
    onChange: (info) => {
      if (info.file.status === "done") {
        console.log(info.file.response);
        setImageListUrl([
          ...imageListUrl,
          {
            name: info.file.response.original_filename,
            path: info.file.response.url,
          },
        ]);
      }
    },
    multiple: true,
    listType: "picture",
    onRemove: (image) => {
      const index = imageList.indexOf(image);
      const newImageList = imageList.slice();
      newImageList.splice(index, 1);
      const newImageListUrl = imageListUrl.slice();
      newImageListUrl.splice(index, 1);
      setImageList(newImageList);
      setImageListUrl(newImageListUrl);
    },
    beforeUpload: (file, images) => {
      console.log(file.type);
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        message.error(`${file.name} is not a png, jpg, jpeg file`);
      }
      setImageList([...imageList, ...images]);
      return file.type === "image/png" || file.type === "image/jpeg"
        ? true
        : Upload.LIST_IGNORE;
    },
    imageList,
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
                >
                  {error && (
                    <Alert
                      message="Upload product unsuccessful, try again later"
                      type="error"
                      showIcon
                    />
                  )}
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
                          message: "* Price must required",
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
                          message: "* Select Category",
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
                    <Select mode="tags" style={{ width: "100%" }}></Select>,
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Condition *"
                      style={{
                        display: "inline-block",
                        width: "calc(25% - 5px)",
                      }}
                    >
                      <Select allowClear>
                        <Option value="New">New</Option>
                        <Option value="Second">Second</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Weight *"
                      style={{
                        display: "inline-block",
                        width: "calc(25% - 5px)",
                        marginLeft: 30,
                      }}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Stock *"
                      style={{
                        display: "inline-block",
                        width: "calc(25% - 5px)",
                        marginLeft: 30,
                      }}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item className="description" label="Description">
                    <Input.TextArea />
                  </Form.Item>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                  </Upload>
                  <Form.Item className="button-submit">
                    <Button type="primary" htmlType="submit" loading={loading}>
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
