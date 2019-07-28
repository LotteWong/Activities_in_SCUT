// activity.js

// TODO: 加标签加分类
// TODO: 右边按钮和文本调成相对位置
// TODO: 解决图片问题

var app = getApp()

Page({
  data: {
    activities: [
      {
        id: 1000000,
        title: "微软亚洲研究院创新论坛2019",
        time: "2019-08-22",
        address: "北京微软大厦",
        content: "创新汇",
        host: "微软亚研",
        left: 7,
        total: 21,
        isIn: false,
      },
      {
        id: 1000001,
        title: "2019年二十一世纪的计算大会",
        time: "2019-08-30",
        address: "上海世博中心",
        content: "二十一世纪的计算大会",
        host: "微软亚研",
        left: 7,
        total: 21,
        isIn: false,
      }
    ],

    thumbnailUrl: "../../images/",
    
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
  },

  // 加载活动列表
  onLoad: function () {
    console.log("加载活动列表");
    var that = this;
    wx.showLoading({
      title: '努力加载中...',
    });

    // that.loadActivities();
    wx.hideLoading();
  },

  // 下拉更新活动
  onPullDownRefresh: function () {
    console.log("下拉更新活动");
    var that = this;
    wx.showNavigationBarLoading();

    setTimeout(() => {
      // that.loadActivities();
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000)
  },

  // 后端获取数据
  loadAcitivities: function () {
    /*
    var that = this;
    wx.request({
      url: http:localhost:8888/dbadmin/adservice/listuser, // 接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      // 成功
      success: function (res) {
        console.log("加载活动列表 成功", res.data.data);
        that.setData({
          activities: res.data.data
        });
      },
      // 失败
      fail: function (err) {
        console.log("加载活动列表 失败", err);
      }
    })
    */
  },

  // 活动详情
  showActivity: function (event) {
    console.log(event.currentTarget.id)
    console.log(!(event.currentTarget.id == ""))
    console.log("../activity_info/activity_/" + event.currentTarget.id + "activity_" + event.currentTarget.id)

    if (!(event.currentTarget.id == "")) {
      console.log("存在该活动");
      wx.navigateTo({
        url: "../activity_info/activity_" + event.currentTarget.id + "/activity_" + event.currentTarget.id
      });
    } else {
      console.log("没有该活动");
    }

    // TODO: blk传参问题
    wx.navigateTo({
      url: "../activity_info/activity_" + 1 + "/activity_" + 1
    });
  },

  // 活动筛选
  filterActivities: function() {
    console.log("活动筛选");
  },

  // 活动排序
  sortActivities: function() {
    console.log("活动排序");
  },

  // 参与退出活动
  handleActivity: function() {
    // TODO: btn传参问题
    console.log(this.data.activities[0].isIn);

    if(this.data.activities[0].isIn)
      console.log("退出活动");
    else
      console.log("参与活动");
    var that = this;
    that.data.activities[0].isIn = !that.data.activities[0].isIn;

    console.log(that.data.activities[0].isIn);
  }
})