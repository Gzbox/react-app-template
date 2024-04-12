import React from "react";
import { Button, Form, type FormProps, Input, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@/service/api";
import { setLocalStorage } from "@/utils";

type FieldType = {
  username?: string;
  password?: string;
};

const Login: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const navigator = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    setLoading(true);
    try {
      // const resp = await loginApi(values);
      // setLocalStorage(import.meta.env.VITE_TOKEN_KEY, resp);
      // navigator("/");

      // 模拟接口登录
      const resp = await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            `mock token: ${values.username}-${values.password}-${new Date()}`
          );
        }, 3000)
      );
      setLocalStorage(import.meta.env.VITE_TOKEN_KEY, resp);
      navigator("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Form
        layout="vertical"
        style={{ minWidth: 300 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          username: "admin",
          password: "123456",
        }}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" block htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default Login;
