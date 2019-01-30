
import util from '../../util/util'
import first from '../../page/first/index'

var app = getApp();

Page({
  data:{
    pBackgroundImg: getApp().globalData.pBackgroundImg,
    companyInitText: "        塔米智能基于多年在网络化服务机器人、大数据服务及移动互联网等领域的核心技术积累，致力于为客户创造具有持续智能服务能力、并能够与应用场景不断迭代的产品与应用方案;作为科技部中国生产力促进中心-服务机器人专委会会长单位，塔米智能积极参与多个专业服务机器人的行业标准及技术规范制定工作。\n        塔米智能始创于2007年，拥有国家高新技术企业及双软企业资质。公司总部位于北京海淀区中关村，分别在天津市津南区及江苏省昆山市建有集技术开发、生产制造及客户服务一体化的发展基地；同时在全国十多个城市建有办事处或分支机构，为客户提供更便捷的技术支持与服务。\n        塔米智能为国内外数万家企业及客户提供服务，其中包括数十家世界500强企业。同时与航天科工、中科院半导体所、法国国家科研中心、保利集团等国内外数十家企业及科研单位建立了战略合作关系。",
  },
 
  onLoad: function (options) {
    console.log("company onload ok");
  },
  firstClick(event) {
    console.log("companyClick doing");
    util.tap_ch(event)
    this.setCompanyData();
  },
  setCompanyData: function () {
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
    this.setCompanyData();
  },
  company_clicked: function (e) {
    util.tap_ch(e);
    this.setCompanyData();
  },
  product_clicked: function (e) {
    wx.redirectTo ({
      url: '../../page/product/index'
    });
    util.tap_ch(e);
    this.setCompanyData();
  },
  news_clicked: function (e) {
    wx.redirectTo ({
      url: '../../page/news/index'
    });
    util.tap_ch(e);
    this.setCompanyData();
  },
  contact_clicked: function (e) {
    wx.redirectTo ({
      url: '../../page/contact/index'
    });
    util.tap_ch(e);
    this.setCompanyData();
  },
})