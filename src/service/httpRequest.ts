import { getLocalStorage } from "@/utils";
import { notification } from "antd";
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { ResponseResult } from "types";

enum ResultEnum {
  SUCCESS = 0,
}

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求被发送之前做些什么
    config.headers.Authorization = `Bearer Token ${getLocalStorage(import.meta.env.VITE_APP_TOKEN_NAME)}`;
    return config;
  },
  (error) => {
    // 请求错误时做些什么
    return Promise.reject(error);
  }
);

// 响应拦截
axiosInstance.interceptors.response.use(
  (res: AxiosResponse<ResponseResult>) => {
    console.log(res);
    if (!res.data) throw new Error("请求接口异常");
    const { resp_code, data, resp_msg } = res.data;
    // 业务请求成功
    const hasSuccess =
      data &&
      Reflect.has(res.data, "resp_code") &&
      resp_code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return data;
    }

    // 业务请求错误
    throw new Error(resp_msg || "请求接口异常");
  },
  (error: AxiosError<ResponseResult>) => {
    console.log(error);
    const { response, message } = error || {};
    let errMsg = "";
    try {
      errMsg = response?.data?.resp_msg || message;
    } catch (error) {
      throw new Error(error as unknown as string);
    }
    // 对响应错误做点什么
    // if (!errMsg) {
    //   errMsg = '请求接口异常';
    // }
    notification.error({
      message: "请求错误",
      description: errMsg,
    });
    return Promise.reject(error);
  }
);

class HttpRequest {
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<ResponseResult>>(config)
        .then((res: AxiosResponse<ResponseResult>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
}
const httpRequest = new HttpRequest();

export default httpRequest;
