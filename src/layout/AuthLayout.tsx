import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Layout>
      <Layout.Content>
        <div className="h-screen flex justify-center items-center">
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default AuthLayout;
