
import util from '../../util/util'
import first from '../../page/first/index'

var app = getApp();

Page({
  data: {
    pBackgroundImg: getApp().globalData.pBackgroundImg,
  },

  onLoad: function (options) {
    console.log("company onload ok");

  },
  firstClick(event) {
    util.tap_ch(event)
    this.setProductData();
  },
  setProductData: function () {
    this.setData({
      open: getApp().globalData.openState,
      pBackgroundImg: getApp().globalData.pBackgroundImg,
      imageUrl: getApp().globalData.imageUrl,
      pNameText: getApp().globalData.pNameText,
    })
  },
  first_clicked: function (e) {
    console.log("first_clicked doing");
    wx.navigateBack ({
      url: '../../page/first/index'
    });
    util.tap_ch(e);
    this.setProductData();
  },
  company_clicked: function (e) {
    wx.redirectTo ({
      url: '../../page/company/index'
    });
    util.tap_ch(e);
    this.setProductData();
  },
  product_clicked: function (e) {
    util.tap_ch(e);
    this.setProductData();
  },
  news_clicked: function (e) {
    wx.redirectTo ({
      url: '../../page/news/index'
    });
    util.tap_ch(e);
    this.setProductData();
  },
  contact_clicked: function (e) {
    wx.redirectTo ({
      url: '../../page/contact/index'
    });
    util.tap_ch(e);
    this.setProductData();
  },
  suo:function(e) {
    console.log("产品展厅搜索...");
    wx.navigateTo({
      url: '../../page/search/index',
    })
  },
  produceInfo: function(e) {
    switch (e.target.id) {
      case "xiaoluo1":
        {
          console.log("小罗1被点击，进入小罗详情页...");
        }
      case "xiaov1":
        {
          console.log("小薇1被点击...");
        }
      case "xiaov3":
        {
          console.log("小薇3被点击...");
        }
      case "xiaov5":
        {
          console.log("小薇5被点击...");
        }
        wx.navigateTo({
          url: '../../page/productInfo/index'
        });
    }
    
  },
})