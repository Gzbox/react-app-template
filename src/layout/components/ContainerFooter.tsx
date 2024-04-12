import { Layout, FloatButton, Typography } from "antd";

const ContainerFooter = () => {
  return (
    <Layout.Footer className="text-center p-1">
      <Typography.Text type="secondary" className="text-xs">
        &copy; {new Date().getFullYear()} {import.meta.env.VITE_TITLE}
      </Typography.Text>
      <FloatButton.BackTop />
    </Layout.Footer>
  );
};

export default ContainerFooter;
