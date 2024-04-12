import { BookOutlined, CameraOutlined } from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems: MenuProps["items"] = [
  {
    key: "/",
    icon: <BookOutlined />,
    label: " 首页",
  },
  {
    key: "/demo",
    icon: <CameraOutlined />,
    label: "Demo",
  },
];

const ContainerMenu = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[pathname]}
      items={menuItems}
      onClick={({ key }) => {
        navigator(key);
      }}
    />
  );
};

export default ContainerMenu;
