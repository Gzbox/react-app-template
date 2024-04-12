import { theme as antTheme, type ThemeConfig } from "antd";
import tailwindConfig from "../../tailwind.config";

const { getDesignToken } = antTheme;

/**
 * 当前预设的全局 样式token
 */
const globalToken = getDesignToken();

/**
 * 固定导航栏
 */
export const FIXED_HEADER = true;
/**
 * 固定侧边栏
 */
export const FIXED_SIDER = true;
/**
 * 主题色
 */
export const PRIMARY_COLOR = tailwindConfig.theme.extend.colors.primary;
/**
 * Layout 左侧抽屉的宽度
 */
export const MENU_WIDTH = 200;
/**
 * Layout 顶部导航的宽度
 */
export const NAV_HEIGHT = 56;
/**
 * Layout 顶部导航的内边距
 */
export const NAV_PADDING = 16;

/**
 * 全局 antd 主題
 */
export const theme: ThemeConfig = {
  token: {
    colorPrimary: PRIMARY_COLOR,
    colorInfo: PRIMARY_COLOR,
  },
  components: {
    Layout: {
      headerHeight: NAV_HEIGHT,
      headerPadding: NAV_PADDING,
      headerBg: globalToken.colorBgContainer,
      siderBg: globalToken.colorBgContainer,
    },
  },
};
