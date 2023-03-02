import Mock from "mockjs";

Mock.mock("/api/category/get_category", "get", () => {
  return [
    {
      label: "新品",
      banners: [require("images/category/banners/1.png"), require("images/category/banners/2.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "手机",
      banners: [require("images/category/banners/3.png")],
      list: [
        {
          name: "HUAWEI MATE系列",
          items: [
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "HUAWEI P系列",
          items: [
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "HUAWEI P系列",
          items: [
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/2.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "电脑办公",
      banners: [require("images/category/banners/4.png")],
      list: [
        {
          name: "MateBook X 系列",
          items: [
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "MateBook X 系列",
          items: [
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "MateBook X 系列",
          items: [
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/3.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "平板",
      banners: [require("images/category/banners/5.png")],
      list: [
        {
          name: "MatePad Pro系列",
          items: [
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "MatePad Pro系列",
          items: [
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "MatePad Pro系列",
          items: [
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/4.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "智能穿戴",
      banners: [require("images/category/banners/6.png"), require("images/category/banners/5.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "耳机音箱",
      banners: [require("images/category/banners/2.png")],
      list: [
        {
          name: "耳机音箱",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "耳机音箱",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "耳机音箱",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "智慧屏",
      banners: [require("images/category/banners/3.png")],
      list: [
        {
          name: "智慧屏",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "智慧屏",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "智慧屏",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "智能路由",
      banners: [require("images/category/banners/1.png")],
      list: [
        {
          name: "智能路由",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "智能路由",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "智能路由",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "VR眼镜",
      banners: [require("images/category/banners/2.png")],
      list: [
        {
          name: "VR眼镜",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "VR眼镜",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "VR眼镜",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "个护健康",
      banners: [require("images/category/banners/3.png")],
      list: [
        {
          name: "个护健康",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "个护健康",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "个护健康",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "家用电器",
      banners: [require("images/category/banners/4.png")],
      list: [
        {
          name: "家用电器",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "家用电器",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "家用电器",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "智能家居",
      banners: [require("images/category/banners/5.png")],
      list: [
        {
          name: "智能家居",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "智能家居",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "智能家居",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "老品",
      banners: [require("images/category/banners/6.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "老品",
      banners: [require("images/category/banners/2.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "老品",
      banners: [require("images/category/banners/2.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "老品",
      banners: [require("images/category/banners/2.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    },
    {
      label: "老品",
      banners: [require("images/category/banners/2.png")],
      list: [
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        },
        {
          name: "手机",
          items: [
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            },
            {
              image: require("images/category/list/1.png"),
              title: "HUAWEI P50 Pocket"
            }
          ]
        }
      ]
    }
  ];
});