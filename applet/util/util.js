
var bgImg = '../../images/daohang.png';
var app = getApp();
// var imageUrl;

var temp = {
  /**
   * 侧边栏显隐
   */
  tap_ch: function (e) {
    // app.globalData.imageUrl = imageUrl;
    if (app.globalData.openState) {
      console.log("tap_ch clicked");
      var bgImg = '../../images/daohang.png';
      app.globalData.openState = false;
      app.globalData.pBackgroundImg = bgImg;
    } else {
      console.log("tap_ch clicked again");
      var bgImg = '../../images/daohang1.png';
      app.globalData.openState = true;
      app.globalData.pBackgroundImg = bgImg;
    }
  },
  // setHeadImage : function(e){
  //   imageUrl = app.globalData.imageUrl;
  // },
  // first_clicked: function (e) {
  //   util.tap_ch(e);
  //   this.setDataf();
  // },
}

//导出，供外部使用
export default temp