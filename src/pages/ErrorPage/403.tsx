import { Result } from "antd";

const NoPermission = () => {
  return (
    <div className="flex  flex-col items-center justify-center gap-3 text-center">
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page"
      />
    </div>
  );
};

export default NoPermission;
