import { Layout } from "antd";
import ContainerHeader from "./components/ContainerHeader";
import ContainerSider from "./components/ContainerSider";
import ContainerMenu from "./components/ContainerMenu";
import ContainerContent from "./components/ContainerContent";
import ContainerFooter from "./components/ContainerFooter";

const MainLayout = () => {
  return (
    <Layout className="min-h-full">
      <ContainerHeader />
      <Layout>
        <ContainerSider>
          <ContainerMenu />
        </ContainerSider>
        <Layout>
          <ContainerContent />
          <ContainerFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
