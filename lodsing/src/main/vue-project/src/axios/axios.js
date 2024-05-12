import axios from 'axios'
// import store from '@/store/store'

axios.defaults.baseURL = '/'

// function showPopup(message, path) {

//   store.state.message = message;
//   store.state.path = path;
//   store.state.trigger = true;
// }

// axios 요청 인터셉터
// axios.interceptors.request.use(
//     function(config) {
      // axios 함수를 통해 API를 찌르는 경우와 아닌 경우를 서버에서 구분하기 위해 header에 'SystemName' 필드를 추가
      // if(config.method == 'get') {        
      //   config.headers = { 'Accept': 'application/json, text/plain, */*', 'SystemName': 'xafeadmin' }
      // } else if(config.method == 'post') { 
      //   if(config.url=="/login/process?locale=ko" || config.url=="/login/process?locale=en" || config.url=="/login/process?locale=ja" || config.url=="/login/process?locale=de") {
      //     config.headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 'SystemName': 'xafeadmin' }
      //   } else if(config.url == "/firmware") {
      //     config.headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'multipart/form-data', 'SystemName': 'xafeadmin' }
      //   } else {
      //     config.headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=utf-8', 'SystemName': 'xafeadmin' }
      //   }
      // }
      //x-www-form-urlencoded

       // put -> post 로 변환하고 hiddenmethod 를 이용하여 put 방식을 처리
      // else if(config.method == 'put') {
      //   config.method = 'post'
      //   if(config.url.indexOf('/firmware') !== -1 ) {
      //     config.headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'multipart/form-data', 'SystemName': 'xafeadmin' }
      //   } else {
      //     config.headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=utf-8', 'SystemName': 'xafeadmin' }
      //   }
      //   config.params = {
      //     ...config.params, 
      //     _method: 'put'
      //   }
      // }

      // delete -> post 로 변환하고 hiddenmethod 를 이용하여 delete 방식을 처리
      // else if(config.method == 'delete') {
      //   config.method = 'post'      
      //   config.headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=utf-8', 'SystemName': 'xafeadmin' }
      //   config.params = {
      //     ...config.params, 
      //     _method: 'delete'
      //   }
      // }
      
    //   return config;
    // },
    
    // function(error) {      
    //   return Promise.reject(error);
    // }
// );

// axios.interceptors.response.use(
//   function (response) {
//     if(response.config.url == '/logout') {
//       location.href = "/login";
//     } else {
//       if(response.data.result != null) {
//         if(response.data.result.code != '0000') {
//           if(response.data.result.code == '0400') {
//             location.href = "/error?code=400";
//           }
//           else if(response.data.result.code == '0401') {
//             showPopup('UNATHORIZED','/');
//           }
//           else if(response.data.result.code == "A004") {					
//             location.href = "/update/password"
//           }
//           else if(response.data.result.code == "U001") {
//             showPopup('Fail to Sign up');
//           }
//           else if(response.data.result.code == "G001") {
//             showPopup('Not Found Group');
//           }
//           else if(response.data.result.code == '0403') {
//             showPopup('Access Denied','/');  
//           }
            // location.href = '/';
          // if(response.data.result.code == 'A001') {
            //         this.showPopup('접근 권한이 없습니다.');
            //         location.href = '/';
            // this.showPopup('잘못된 로그인 정보입니다.');
          // }
//           if(response.data.result.code == '0400') {
//             // location.href = "/error?code=400";
//             alert(" message = " + response.data.result.code);
//             location.href = "/";
          
//           else if(response.data.result.code == '0401') {
//               // initConfirm("[ " + response.data.result.code + " ]<br>" + i18n.t('message.unauthorized'))
//               // .then(function() {
//                 alert(" message = " + response.data.result.code);
//                 location.href = "/";
//               // });
//           }
//           // else if(response.data.result.code == '0403') {                  
//           //   initConfirm("[ " + response.data.result.code + " ]<br>" + response.data.result.message)
//           //   .then(function() {
//           //     location.href = "/";          
//           //   });
//           // } 
//           else {
//             alert(" message = " + response.data.result.code);
//               // initConfirm("[ " + response.data.result.code + " ]<br>" + response.data.result.message);
          // }
      //   } else {

      //   }
      // } 
      // else {
      //   if(contentType == 'application/json') {
      //     var enc = new TextDecoder();
      //     var res = JSON.parse(enc.decode(new Uint8Array(response.data))); //   json                
      //     // initConfirm("[ " + res.result.code + " ]<br>" + res.result.message);
//         }
//       }
//     }
//     return response;
//   }

// );
    

export default axios;