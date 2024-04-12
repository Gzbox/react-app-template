import { Layout, Space, Dropdown, theme } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  GithubOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FIXED_HEADER, NAV_HEIGHT } from "../../styles/theme";
import { clearLocalStorage } from "@/utils";
import LogoContent from "@/components/LogoContent";

const ContainerHeader = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const redirectTo = (path: string) => {
    navigate(path);
  };

  const redirectGithub = () => {
    window.open("https://github.com/Gzbox/react-app-template", "_blank");
  };

  const items = [
    {
      key: "1",
      label: <Space>个人中心</Space>,
      icon: <UserOutlined />,
      onClick: () => {
        redirectTo("/profile");
      },
    },
    {
      key: "2",
      label: <Space>个人设置</Space>,
      icon: <SmileOutlined />,
      onClick: () => {
        redirectTo("/setting");
      },
    },
    {
      key: "3",
      label: <Space>退出登录</Space>,
      icon: <LogoutOutlined />,
      onClick: () => {
        redirectTo("/login");
        clearLocalStorage();
      },
    },
  ];

  return (
    <Layout.Header
      className="flex justify-between items-center"
      style={{
        borderStyle: "solid",
        borderWidth: "0 0 1px 0",
        borderColor: token.colorBorderSecondary,
        ...(FIXED_HEADER
          ? {
              height: NAV_HEIGHT,
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
            }
          : {
              height: NAV_HEIGHT,
            }),
      }}
    >
      <LogoContent onClick={() => redirectTo("/")} />
      <div>
        <Space
          direction="horizontal"
          style={{ cursor: "pointer", paddingRight: 18 }}
        >
          <GithubOutlined style={{ fontSize: 16 }} onClick={redirectGithub} />
        </Space>

        <Dropdown
          menu={{
            items,
          }}
        >
          <Space>
            <span>大佬</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default ContainerHeader;
