
import util from '../../util/util'

var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //open: false,
    mode: "scaleToFill",
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    scrollTop: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("first onload ok");

    var array = this.data.arr
    for (let i = 1; i < 7; i++) {
      array.push("../../images/" + i + ".jpg")
    }
    this.setData({ 
      arr: array,
      open: getApp().globalData.openState,
      pBackgroundImg: getApp().globalData.pBackgroundImg,
      imageUrl: getApp().globalData.imageUrl,
      pNameText: getApp().globalData.pNameText,

    })
    console.log("first open =" + this.data.open);

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // };

    // util.setHeadImage(app.globalData.imageUrl);
    
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  setFirstData: function () {
    this.setData({
      open: getApp().globalData.openState,
      pBackgroundImg: getApp().globalData.pBackgroundImg,
    })
  },

  firstClick(event) {
    console.log("firstClick doing");
    util.tap_ch(event)
    this.setFirstData();
    //util.setHeadImage();
  },
  /**
   * 侧边栏-首页
   */
  first_clicked: function (e) {
    util.tap_ch(e);
    this.setFirstData();

  },
  /**
  * 侧边栏-公司简介
  */
  company_clicked: function (e) {
    wx.navigateTo({
      url:'../../page/company/index'
    });
    util.tap_ch(e);
    this.setFirstData();
  },
  /**
  * 侧边栏-产品展厅
  */
  product_clicked: function (e) {
    wx.navigateTo({
      url: '../../page/product/index'
    });
    util.tap_ch(e);
    this.setFirstData();
  },
  /**
  * 侧边栏-新闻中心
  */
  news_clicked: function (e) {
    wx.navigateTo({
      url: '../../page/news/index'
    });
    util.tap_ch(e);
    this.setFirstData();
  },
  /**
  * 侧边栏-联系方式
  */
  contact_clicked: function (e) {
    wx.navigateTo({
      url: '../../page/contact/index'
    });
    util.tap_ch(e);
    this.setFirstData();
  },

  first_btnIndex_clicked: function(e) {
    switch (e.target.id) {
      case "company":
      {
        wx.navigateTo({
          url: '../../page/company/index'
        });
      }
      case "product":
      {
        wx.navigateTo({
          url: '../../page/product/index'
        });
      }
      case "news":
        {
          wx.navigateTo({
            url: '../../page/news/index'
          });
        }
      case "contact":
        {
          wx.navigateTo({
            url: '../../page/contact/index'
          });
        }
    }
  },
})