import Mock from "mockjs";

Mock.mock("/api/product/get_products", "get", () => {
  return [
    {
      id: 0,
      title: "华为智选 海德HEAD智能跳绳S1 双绳版",
      long_title: "华为智选 海德智能跳绳S1 双绳版 星夜黑 心率播报、专业课程指导(支持HUAWEI HiLink)",
      price: 229,
      remarks: "限时省30",
      image: require("images/product/id_0_1.png"),
      banners: [
        require("images/product/id_0_1.png"),
        require("images/product/id_0_2.png"),
        require("images/product/id_0_3.png"),
        require("images/product/id_0_4.png"),
        require("images/product/id_0_5.png"),
        require("images/product/id_0_6.png"),
        require("images/product/id_0_7.png"),
        require("images/product/id_0_8.png")
      ],
      info: require("images/product/id_0_info.png"),
      labels: ["华为智选"],
      tags: ["限时优惠", "赠送积分"]
    },
    {
      id: 1,
      title: "HUAWEI nova 9 Pro",
      long_title: "HUAWEI nova 9 Pro 8GB+128GB 4G 全网通版（亮黑色）",
      price: 3499,
      remarks: "100W超级快充",
      image: require("images/product/id_1_1.png"),
      banners: [
        require("images/product/id_1_1.png"),
        require("images/product/id_1_2.png"),
        require("images/product/id_1_3.png"),
        require("images/product/id_1_4.png"),
        require("images/product/id_1_5.png"),
        require("images/product/id_1_6.png"),
        require("images/product/id_1_7.png")
      ],
      info: require("images/product/id_1_info.png"),
      labels: [],
      tags: ["赠送积分"]
    },
    {
      id: 2,
      title: "麦瑞克超燃脂智能家用可折叠跑步机幻影X1",
      long_title: "麦瑞克超燃脂家用可折叠跑步机幻影X1",
      price: 2599,
      remarks: "众测优惠700元",
      image: require("images/product/id_2_1.png"),
      banners: [
        require("images/product/id_2_1.png"),
        require("images/product/id_2_2.png"),
        require("images/product/id_2_3.png"),
        require("images/product/id_2_4.png"),
        require("images/product/id_2_5.png")
      ],
      info: require("images/product/id_2_info.png"),
      labels: [],
      tags: []
    },
    {
      id: 3,
      title: "雷克沙Lexar SL660 RGB移动固态硬盘",
      long_title: "雷克沙 SL660 RGB移动固态硬盘",
      price: 899,
      remarks: "",
      image: require("images/product/id_3_1.png"),
      banners: [
        require("images/product/id_3_1.png"),
        require("images/product/id_3_2.png"),
        require("images/product/id_3_3.png"),
        require("images/product/id_3_4.png"),
        require("images/product/id_3_5.png"),
        require("images/product/id_3_6.png")
      ],
      info: require("images/product/id_3_info.png"),
      labels: [],
      tags: ["限时优惠", "分期免息"]
    },
    {
      id: 4,
      title: "华为智选 哈尔斯智能水杯 旋盖款",
      long_title: "VSITOO水质检测商务智能保温杯V1 黑金色（支持HUAWEI Hilink）",
      price: 159,
      remarks: "预订省14元",
      image: require("images/product/id_4_1.png"),
      banners: [
        require("images/product/id_4_1.png"),
        require("images/product/id_4_2.png"),
        require("images/product/id_4_3.png"),
        require("images/product/id_4_4.png")
      ],
      info: require("images/product/id_4_info.png"),
      labels: ["华为智选"],
      tags: []
    },
    {
      id: 5,
      title: "美的冰箱 BCD-600WKGPZM(E)  深空蓝",
      long_title: "美的智能家电冰箱509升十字门 BCD-509WSGPZM(E)深空蓝-繁星（支持鸿蒙智联）",
      price: 8999,
      remarks: "",
      image: require("images/product/id_5_1.png"),
      banners: [
        require("images/product/id_5_1.png"),
        require("images/product/id_5_2.png"),
        require("images/product/id_5_3.png"),
        require("images/product/id_5_4.png"),
        require("images/product/id_5_5.png"),
        require("images/product/id_5_6.png")
      ],
      info: require("images/product/id_5_info.png"),
      labels: [],
      tags: []
    },
    {
      id: 6,
      title: "小豚室外摄像机 云台版",
      long_title: "小豚室外摄像机 云台版（支持HUAWEI HiLink）",
      price: 209,
      remarks: "",
      image: require("images/product/id_6_1.png"),
      banners: [
        require("images/product/id_6_1.png"),
        require("images/product/id_6_2.png"),
        require("images/product/id_6_3.png"),
        require("images/product/id_6_4.png"),
        require("images/product/id_6_5.png"),
        require("images/product/id_6_6.png"),
        require("images/product/id_6_7.png")
      ],
      info: require("images/product/id_6_info.png"),
      labels: ["限时优惠"],
      tags: []
    },
    {
      id: 7,
      title: "HUAWEI WATCH D",
      long_title: "HUAWEI WATCH D 曜石黑 华为腕部心电血压记录仪 血压测量 心电采集",
      price: 2988,
      remarks: "",
      image: require("images/product/id_7_1.png"),
      banners: [
        require("images/product/id_7_1.png"),
        require("images/product/id_7_2.png"),
        require("images/product/id_7_3.png"),
        require("images/product/id_7_4.png"),
        require("images/product/id_7_5.png"),
        require("images/product/id_7_6.png")
      ],
      info: require("images/product/id_7_info.png"),
      labels: ["分期免息", "赠送积分"],
      tags: []
    },
    {
      id: 8,
      title: "HUAWEI P50 Pro",
      long_title: "HUAWEI P50 Pro 骁龙888 4G 全网通 8GB+256GB 曜金黑",
      price: 6488,
      remarks: "骁龙888",
      image: require("images/product/id_8_1.png"),
      banners: [
        require("images/product/id_8_1.png"),
        require("images/product/id_8_2.png"),
        require("images/product/id_8_3.png"),
        require("images/product/id_8_4.png"),
        require("images/product/id_8_5.png"),
        require("images/product/id_8_6.png"),
        require("images/product/id_8_7.png")
      ],
      info: require("images/product/id_8_info.png"),
      labels: ["赠送积分"],
      tags: []
    },
    {
      id: 9,
      title: "【订金】HUAWEI MateBook X Pro 2022款",
      long_title: "【订金】HUAWEI MateBook X Pro 2022款 14.2英寸11代酷睿 i7 16GB 512GB 锐炬显卡 3.1k原色全面屏 超薄金属机身商务笔记本 超级终端（翡冷翠）",
      price: 10499,
      remarks: "新品省200",
      image: require("images/product/id_9_1.png"),
      banners: [
        require("images/product/id_9_1.png"),
        require("images/product/id_9_2.png"),
        require("images/product/id_9_3.png"),
        require("images/product/id_9_4.png"),
        require("images/product/id_9_5.png"),
        require("images/product/id_9_6.png"),
        require("images/product/id_9_7.png")
      ],
      info: require("images/product/id_9_info.png"),
      labels: ["新品上市"],
      tags: ["分期免息", "赠送积分"]
    },
    {
      id: 10,
      title: "HUAWEI MateBook D 14 2022款",
      long_title: "HUAWEI MateBook D 14 2022款 14英寸11代酷睿 i5 集显 16GB 512GB 轻薄笔记本 护眼全面屏 华为分享（银）",
      price: 4699,
      remarks: "",
      image: require("images/product/id_10_1.png"),
      banners: [
        require("images/product/id_10_1.png"),
        require("images/product/id_10_2.png"),
        require("images/product/id_10_3.png"),
        require("images/product/id_10_4.png"),
        require("images/product/id_10_5.png"),
        require("images/product/id_10_6.png"),
        require("images/product/id_10_7.png")
      ],
      info: require("images/product/id_10_info.png"),
      labels: ["新品上市"],
      tags: ["限时特价", "分期免息"]
    },
    {
      id: 11,
      title: "华为智慧屏 SE55A 会员版",
      long_title: "【买会员赠智慧屏，购买智慧屏单品不包含会员】买4年华为视频会员赠华为智慧屏 SE55A 会员版（2499元单独购买智慧屏硬件不包含4年华为全屏影视会员+4年华为视频少儿会员）",
      price: 2499,
      remarks: "买赠套餐省3404",
      image: require("images/product/id_11_1.png"),
      banners: [
        require("images/product/id_11_1.png"),
        require("images/product/id_11_2.png"),
        require("images/product/id_11_3.png"),
        require("images/product/id_11_4.png"),
        require("images/product/id_11_5.png"),
        require("images/product/id_11_6.png")
      ],
      info: require("images/product/id_11_info.png"),
      labels: [],
      tags: ["赠送积分"]
    }
  ];
});