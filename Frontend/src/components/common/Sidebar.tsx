import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  CarOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider width={240} breakpoint="lg" collapsedWidth="80" theme="dark">
      <div className="h-16 flex items-center justify-center text-white text-xl font-bold border-b border-gray-700">
        Vehicle Rental
      </div>

      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: "/",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "/vehicles",
            icon: <CarOutlined />,
            label: "Vehicles",
          },
          {
            key: "/bookings",
            icon: <BookOutlined />,
            label: "My Bookings",
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
