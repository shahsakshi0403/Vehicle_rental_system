import { Layout } from "antd";
import { ReactNode } from "react";
import Sidebar from "../components/common/Sidebar";
import HeaderBar from "../components/common/Header";

const { Content } = Layout;

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <Layout>
        {/* Header */}
        <HeaderBar />

        {/* Main Content */}
        <Content className="m-6">
          <div className="min-h-[calc(100vh-120px)] rounded-xl bg-white p-6 shadow-sm">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
