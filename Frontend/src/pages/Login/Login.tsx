import { Button, Card, Form, Input, Typography, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/auth.api";
import { loginSuccess } from "../../redux/auth/authSlice";
import { LoginRequest } from "../../redux/auth/authTypes";

const { Title } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginRequest>();

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await loginUser(data);

      dispatch(
        loginSuccess({
          token: response.token,
          user: response.user,
        })
      );

      message.success("Login Successful");

      navigate("/");
    } catch (error: any) {
      message.error(error?.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <Card className="w-[420px] shadow-lg">
        <Title level={3} className="text-center">
          Vehicle Rental Login
        </Title>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Email">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<MailOutlined />}
                  placeholder="Enter Email"
                />
              )}
            />
          </Form.Item>

          <Form.Item label="Password">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  prefix={<LockOutlined />}
                  placeholder="Enter Password"
                />
              )}
            />
          </Form.Item>

          <Button htmlType="submit" type="primary" loading={isSubmitting} block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
