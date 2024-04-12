import { Result } from "antd";

const NotMatch = () => {
  return (
    <div className="flex  flex-col items-center justify-center gap-3 text-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </div>
  );
};

export default NotMatch;
