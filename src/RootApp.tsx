import { useRoutes } from "react-router-dom";
import routes from "./router";
import AuthRouter from "./router/AuthRouter";
// https://ant-design.antgroup.com/components/app-cn#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8
import { App } from "antd";

const RootApp = () => {
  const element = useRoutes(routes as any);
  return (
    <App>
      <AuthRouter>{element}</AuthRouter>
    </App>
  );
};

export default RootApp;
