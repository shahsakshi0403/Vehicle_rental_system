import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content className="flex item-center justify-center bg-gray-100">
        {children}
      </Content>
    </Layout>
  );
};

export default AuthLayout;
