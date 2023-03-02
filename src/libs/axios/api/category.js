import { requestMock } from "libs/axios/request.js";

export function getCategory() {
  return requestMock({
    url: "/api/category/get_category",
    method: "get"
  });
}