import { requestMock } from "libs/axios/request.js";

export function getProducts() {
  return requestMock({
    url: "/api/product/get_products",
    method: "get"
  });
}