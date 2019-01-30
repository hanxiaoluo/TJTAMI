
import util from '../../util/util'
import first from '../../page/first/index'

var app = getApp();

Page({
  data: {
    pBackgroundImg: getApp().globalData.pBackgroundImg,
  },

  onLoad: function (options) {
    console.log("news onload ok");

  },
  firstClick(event) {
    console.log("newClick doing");
    util.tap_ch(event)
    this.setNewsData();
  },
  setNewsData: function () {
    this.setData({
      open: getApp().globalData.openState,
      pBackgroundImg: getApp().globalData.pBackgroundImg,
      imageUrl: getApp().globalData.imageUrl,
      pNameText: getApp().globalData.pNameText,
    })
  },
  first_clicked: function (e) {
    console.log("first_clicked doing");
    wx.navigateBack({
      url: '../../page/first/index'
    });
    util.tap_ch(e);
    this.setNewsData();
  },
  company_clicked: function (e) {
    wx.redirectTo({
      url: '../../page/company/index'
    });
    util.tap_ch(e);
    this.setNewsData();
  },
  product_clicked: function (e) {
    wx.redirectTo({
      url: '../../page/product/index'
    });
    util.tap_ch(e);
    this.setNewsData();
  },
  news_clicked: function (e) {
    util.tap_ch(e);
    this.setNewsData();
  },
  contact_clicked: function (e) {
    wx.redirectTo({
      url: '../../page/contact/index'
    });
    util.tap_ch(e);
    this.setNewsData();
  },
})