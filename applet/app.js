var bgImg = '../../images/daohang.png';
var imageUrl = null;
var pNameText = null;

App({
  onLaunch: function () {
    console.log('App Launch')

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           this.globalData.imageUrl = this.globalData.userInfo.avatarUrl;
    //           this.globalData.pNameText = this.globalData.userInfo.nickName;
    //           console.log("imageUrl =========" + imageUrl);
    //           console.log("pNameText =========" + pNameText);

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //           wx.redirectTo({
    //             url: '../../page/first/index',
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
  },


  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    openState: false,
    pBackgroundImg: bgImg,
    userInfo: null,
    imageUrl: null,
    pNameText: null,
  }
})
