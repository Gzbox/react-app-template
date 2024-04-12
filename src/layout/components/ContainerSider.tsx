import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  MENU_WIDTH,
  NAV_HEIGHT,
  FIXED_SIDER,
  FIXED_HEADER,
} from "../../styles/theme";

const ContainerSider = (props: { children: React.ReactNode }) => {
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout.Sider
      width={MENU_WIDTH}
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="overflow-hidden"
      style={
        FIXED_SIDER
          ? {
              position: "sticky",
              top: FIXED_HEADER ? NAV_HEIGHT : 0,
              zIndex: 1,
              width: "100%",
              ...(FIXED_HEADER
                ? { height: `calc(100vh - ${NAV_HEIGHT}px)` }
                : { maxHeight: "100vh" }),
            }
          : {}
      }
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto">{props.children}</div>
        <div
          style={{
            borderTop: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          <Button
            type="text"
            size="small"
            block
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onCollapse}
          />
        </div>
      </div>
    </Layout.Sider>
  );
};

export default ContainerSider;
