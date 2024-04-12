import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "dayjs/locale/zh-tw";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { theme } from "./styles/theme.ts";
import RootApp from "./RootApp.tsx";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root") as HTMLDivElement;

createRoot(container).render(
  <StrictMode>
    <HashRouter>
      <ConfigProvider locale={zhCN} theme={theme}>
        <RootApp />
      </ConfigProvider>
    </HashRouter>
  </StrictMode>,
);
