import React from "react";
import { Form, Input, Button, Divider, Alert } from "antd";
import GoogleIcon from "../../../../assets/img/google-icon.png";
import { Typography } from "antd";
import "./login-form.less";
import useAuth from "../../../../providers/auth/context";
const { Text, Link } = Typography;

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const { run, loading, error } = login;

  const onFinish = (values) => {
    run(values);
  };
  return (
    <div className="login-form">
      <Form
        layout="horizontal"
        form={form}
        requiredMark={false}
        onFinish={onFinish}
      >
        {error && (
          <Alert message="Email or Password Incorrect" type="error" showIcon />
        )}
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
