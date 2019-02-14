
import util from '../../util/util'
import first from '../../page/first/index'

var app = getApp();

Page({
  data: {
    pBackgroundImg: getApp().globalData.pBackgroundImg,
    // 地图相关
    markers: [{
      iconPath: '../../images/marker.png',
      id: 0,
      label:'天津塔米智能科技',
      latitude: 38.9763059613,
      longitude: 117.4151731486,
      width: 25,
      height: 30
    }]
  },

  onLoad: function (options) {
    console.log("company onload ok");

  },
  markertap: function(res){
    console.log("hahahhahahah.....");
    console.log(res);
    let lat = ''; // 获取点击的markers经纬度
    let lon = ''; // 获取点击的markers经纬度
    let name = ''; // 获取点击的markers名称
    let markerId = res.markerId;// 获取点击的markers  id
    let markers = res.currentTarget.dataset.markers;// 获取markers列表

    for (let item of markers) {
      if (item.id == markerId) {
        lat = item.latitude;
        lon = item.longitude;
        // name = item.callout.content;

        wx.openLocation({ // 打开微信内置地图，实现导航功能（在内置地图里面打开地图软件）
          latitude: lat,
          longitude: lon,
          // name: name,
          success: function (res) {
            console.log(res);
          },
          fail: function (res) {
            console.log(res);
          }
        })
        break;
      }
    }
  },

  firstClick(event) {
    console.log("companyClick doing");
    util.tap_ch(event)
    this.setContactData();
  },
  setContactData: function () {
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
    this.setContactData();
  },
  company_clicked: function (e) {
    wx.redirectTo({
      url: '../../page/company/index'
    });
    util.tap_ch(e);
    this.setContactData();
  },
  product_clicked: function (e) {
    wx.redirectTo({
      url: '../../page/product/index'
    });
    util.tap_ch(e);
    this.setContactData();
  },
  news_clicked: function (e) {
    wx.redirectTo({
      url: '../../page/news/index'
    });
    util.tap_ch(e);
    this.setContactData();
  },
  contact_clicked: function (e) {
    util.tap_ch(e);
    this.setContactData();
  },
})