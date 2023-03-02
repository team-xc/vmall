import Mock from "mockjs";

Mock.mock("/api/home/get_labels", "get", () => {
  return ["华为专区", "HarmonyOS", "耳机", "美食酒饮", "手表", "手环", "电脑", "平板", "智慧屏", "家用电器", "路由器"];
});

Mock.mock("/api/home/get_banners", "get", () => {
  return [
    require("images/banners/1.jpg"),
    require("images/banners/2.jpg"),
    require("images/banners/3.jpg"),
    require("images/banners/4.jpg"),
    require("images/banners/5.jpg"),
    require("images/banners/6.jpg")
  ];
});

Mock.mock("/api/home/get_classified_list", "get", () => {
  return [
    {
      text: "智能家居",
      image: require("images/classified/1.png")
    },
    {
      text: "拼团",
      image: require("images/classified/2.png")
    },
    {
      text: "华为专区",
      image: require("images/classified/3.png")
    },
    {
      text: "华为智选",
      image: require("images/classified/4.png")
    },
    {
      text: "超新计划",
      image: require("images/classified/5.png")
    },
    {
      text: "众测",
      image: require("images/classified/6.png")
    },
    {
      text: "全球甄选",
      image: require("images/classified/7.png")
    },
    {
      text: "鸿蒙智联",
      image: require("images/classified/8.png")
    },
    {
      text: "直播",
      image: require("images/classified/9.png")
    },
    {
      text: "企业团购",
      image: require("images/classified/10.png")
    }
  ];
});

Mock.mock("/api/home/get_time_to_buy_list", "get", () => {
  return [
    {
      price: 2599,
      image: require("images/time_to_buy/1.png")
    },
    {
      price: 8299,
      image: require("images/time_to_buy/2.png")
    },
    {
      price: 8299,
      image: require("images/time_to_buy/3.png")
    },
    {
      price: 259,
      image: require("images/time_to_buy/4.png")
    },
    {
      price: 1699,
      image: require("images/time_to_buy/5.png")
    }
  ];
});

Mock.mock("/api/home/get_hours_later", "get", () => {
  return [2, 0, 0];
});

Mock.mock("/api/home/get_new_product_list", "get", () => {
  return {
    banners: [
      require("images/new_product/banners/1.png"),
      require("images/new_product/banners/2.png"),
      require("images/new_product/banners/3.png")
    ],
    products: [
      require("images/new_product/1.png"),
      require("images/new_product/2.png"),
      require("images/new_product/3.png"),
      require("images/new_product/4.png"),
      require("images/new_product/5.png"),
      require("images/new_product/6.png")
    ]
  };
});