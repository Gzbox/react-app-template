// 用来放一些全局类型的定义 防止 TS 无法识别

export interface ResponseResult {
  resp_code: number;
  data: any;
  resp_msg: string;
}
