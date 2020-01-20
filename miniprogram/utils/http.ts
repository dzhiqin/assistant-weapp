import { httpUrl } from './env';

const http = async ({ param = {} } = {}) => {
  // wx.showLoading({
  //   title: '拼命加载中..',
  // });
  // let timeStart = Date.now();

  return new Promise((resolve, reject) => {
    wx.request({
      url: httpUrl + '/mapi/graphql',
      data: param,
      header: {
        'content-type': 'application/json',
        // 'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + wx.getStorageSync('token'),
        'x-mina-version': '1.5.7',
        'x-client': 'User',
      },
      method: 'POST',
      complete: (res: any) => {
        wx.hideLoading();
        // console.log(`耗时${Date.now() - timeStart}`);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
          //异常处理逻辑
          wx.showToast({
            // image: '/images/icon/fail.png',
            title: '网络请求失败',
            icon: 'none',
            duration: 2000,
          });
        }
      },
    });
  });
};

// const getUrl = url => {
//   if (url.indexOf('://') == -1) {
//     url = baseUrl + url;
//   }
//   return url;
// };

// get方法
// const _get = (param = {}) => {
//   return http({
//     param,
//   });
// };

const post = (param = {}) => {
  return http({
    param,
  });
};

module.exports = {
  post,
};
