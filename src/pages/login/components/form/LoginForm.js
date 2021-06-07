import React from "react";
import { Form, Input, Button, Divider } from "antd";
import GoogleIcon from "../../../../assets/img/google-icon.png";
import { Typography } from "antd";
import { useApi } from "../../../../hooks/useApi";
import "./login-form.less";
const { Text, Link } = Typography;

const LoginForm = () => {
  const [form] = Form.useForm();
  const { run, loading } = useApi(
    {
      url: "https://deuvox-dev-1.herokuapp.com/api/v1/login",
      method: "post",
      body: JSON.stringify({
        username: form.getFieldValue("email"),
        password: form.getFieldValue("password"),
      }),
    },
    {
      manual: true,
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );

  const onFinish = (values) => {
    console.log(values);
    run();
  };
  return (
    <div className="login-form">
      <Form
        layout="horizontal"
        form={form}
        requiredMark={false}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "*Invalid email",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "*Invalid password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <div className="submit-button">
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              loading={loading}
            >
              Login
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Divider className="login-devider" />
      <Button
        shape="round"
        className="login-google"
        icon={<img src={GoogleIcon} alt="G" />}
      >
        Login With Google
      </Button>
      <Link href="#" className="text-forgot-password">
        Forgot Password?
      </Link>
      <Text className="text-register">
        Haven't register yet? <Link href="#">Register Now</Link>
      </Text>
    </div>
  );
};

export default LoginForm;
