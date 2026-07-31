import { Layout, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const HeaderBar = () => {
  const dispatch = useAppDispatch();

  return (
    <Layout.Header className="flex justify-end items-center bg-white">
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              label: "Logout",
              onClick: () => dispatch(logout()),
            },
          ],
        }}
      >
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Layout.Header>
  );
};

export default HeaderBar;
