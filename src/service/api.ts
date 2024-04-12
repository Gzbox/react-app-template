import request from "./httpRequest";

export const loginApi = async (data: any) => {
  return request.post({
    url: "/api/auth/login",
    data,
  });
};
