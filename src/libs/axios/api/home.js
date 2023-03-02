import { requestMock } from "libs/axios/request.js";

export function getLabels() {
  return requestMock({
    url: "/api/home/get_labels",
    method: "get"
  });
}

export function getBanners() {
  return requestMock({
    url: "/api/home/get_banners",
    method: "get"
  });
}

export function getClassifiedList() {
  return requestMock({
    url: "/api/home/get_classified_list",
    method: "get"
  });
}

export function getTimeToBuyList() {
  return requestMock({
    url: "/api/home/get_time_to_buy_list",
    method: "get"
  });
}

export function getHoursLater() {
  return requestMock({
    url: "/api/home/get_hours_later",
    method: "get"
  });
}

export function getNewProductList() {
  return requestMock({
    url: "/api/home/get_new_product_list",
    method: "get"
  });
}
