import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
