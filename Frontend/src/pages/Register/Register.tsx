import { Button, Card, Form, Input, Typography, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../api/auth.api";
import { RegisterRequest } from "../../redux/auth/authTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoading, setError } from "../../redux/auth/authSlice";

const { Title } = Typography;

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
  } = useForm<RegisterRequest>();

  const onSubmit = async (data: RegisterRequest) => {
    try {
      dispatch(setLoading(true));

      await registerUser(data);

      message.success("Registration successful");

      navigate("/login");
    } catch (error: any) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Registration failed"
        )
      );

      message.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">

        <Title level={3} className="text-center">
          Register
        </Title>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>

          <Form.Item label="Name">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your name"
                />
              )}
            />
          </Form.Item>

          <Form.Item label="Email">
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your email"
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
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="Enter password"
                />
              )}
            />
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            block
            loading={loading}
          >
            Register
          </Button>

          <div className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </div>

        </Form>
      </Card>
    </div>
  );
};

export default Register;