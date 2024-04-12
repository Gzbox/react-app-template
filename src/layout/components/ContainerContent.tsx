import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const ContainerContent = () => {
  return (
    <Layout.Content className="p-2">
      <Outlet />
    </Layout.Content>
  );
};

export default ContainerContent;
