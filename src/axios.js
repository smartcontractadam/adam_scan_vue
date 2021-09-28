// import axios from 'axios';

// /**
//  * 请求处理
//  */
// axios.interceptors.request.use(function (config) {
//     // console.info("-------------------------------------");
//     // console.info("加密前数据======config" + JSON.stringify(config));
//     //先加载一个uuid参数
//     // eslint-disable-next-line no-undef
//     let uuid = getUUID();
//     // eslint-disable-next-line no-useless-escape
//     uuid = uuid.replace(/\-/g, '');
//
//     let token = uuid;
//     if (token != null) {
//         config.headers.Authorization = 'Bearer ' + token;
//     }
//
//     let isEncryption = true;
//
//     if (config.url.indexOf("login/getSession") != -1) {
//         //加密数据并添加到请求中
//         config.headers.token = uuid;
//     } else {
//         if (isEncryption == true) {
//             config.headers.token = uuid;
//         } else {
//             config.headers.token = uuid;
//         }
//     }
//
//     if (isEncryption == false) {
//         return config;
//     }
//     let flag = false;
//
//     if (flag) {
//         return config;
//     }
//     let data = config.data;
//     if(config.url.indexOf("upload/uploadImg") != -1){
//         config.headers['Content-Type'] = 'multipart/form-data';
//     }else if(config.url.indexOf("submitBlogInfo") != -1){
//         // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//     }else{
//         if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded;charset=UTF-8') {
//             var ret = "";
//             for (let it in data) {
//                 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//             }
//             if (ret != "") {
//                 ret = ret.substring(0, ret.length - 1);
//                 data = ret.replace(/\+/g, " ");
//                 let dataEntry = Second.encrypt(First.encrypt(Base64().encode(JSON.stringify(data))));
//                 config.data = {
//                     value: dataEntry
//                 };
//                 console.info();
//             }
//         } else {
//             if (data != null) {
//                 data = JSON.stringify(data);
//             }
//             if (data && (typeof (data) == 'string')) {
//                 let dataEntry = "value=" + Second.encrypt(First.encrypt(Base64().encode(data)));
//                 config.headers['Content-Type'] = 'application/json';
//                 config.data = dataEntry;
//                 console.info();
//             }
//         }
//     }
//     // console.info("加密后数据======config" + JSON.stringify(config));
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });
//
//
// // eslint-disable-next-line no-unused-vars
// function getUUID() {
//     var s = [];
//     var hexDigits = "0123456789abcdef";
//     for (var i = 0; i < 36; i++) {
//         s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
//     }
//     s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
//     s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
//     s[8] = s[13] = s[18] = s[23] = "-";
//
//     var uuid = s.join("");
//     return uuid;
// }
