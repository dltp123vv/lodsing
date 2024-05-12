// export default {
//     data() {
//       return {
//       }
//     },
//     methods: {       
//       getDatetimeFormat: function(date, length) {

//         if(date == null) {
//           return date;
//         }
//         if(date.length != 6 && date.length != 8 && date.length != 14) {
//           return date;
//         }
//         if(length == 6) {
//           return (date.substring(0,4) + "-" + date.substring(4,6));
//         }
//         if(length == 8) {
//           return (date.substring(0,4) + "-" + date.substring(4,6) + "-" + date.substring(6,8));
//         }
//         else if(length == 14) {
//           return (date.substring(0,4) + "-" + date.substring(4,6) + "-" + date.substring(6,8) + " " + date.substring(8,10) + ":" + date.substring(10,12) + ":" + date.substring(12,14));
//         }
//         return date;
//       },

//       getDateToString: function (dates) {
//         if (dates == null || dates == ''){
//           return null
//         }
//         let date = new Date(dates)

//         let result = date.getFullYear()+(date.getMonth() + 1).toString().padStart(2,'0')+date.getDate().toString().padStart(2,'0');
//         return result
//       },

//       //DatePicker에 넣기위한 형식으로 변경
//       getStringToDate(dateString) {
//         return new Date(dateString);
//       },

//       convertToServerTime: function(localTime, suffix) {

//         const serverTimeZone = 'UTC';
        
//         if(localTime == null || localTime == '') {
//           return null;
//         }

//         localTime = localTime.replaceAll('-', '');

//         if(suffix != null && suffix != '') {
//           localTime += suffix;
//           // return this.$moment(localTime, 'YYYYMMDD').tz(serverTimeZone).format('YYYYMMDD') + suffix;
//         }
//         // return this.$moment(localTime, 'YYYYMMDD').tz(serverTimeZone).format('YYYYMMDD') + '235959';
//         return this.$moment(localTime, 'YYYYMMDDHHmmss').tz(serverTimeZone).format('YYYYMMDDHHmmss');
//       },

//       convertToFormattedLocalTime: function(date, length) {        
//         const localOffset = this.$moment().utcOffset(); // UTC +9 서울: 540
//         const serverTimeZone = 'UTC';

//         if(date == null) {
//           return null;
//         }

//         if(date.length != 6 && date.length != 8 && date.length != 14) {
//           return date;
//         }
        
//         let localTime = this.$moment.tz(date, 'YYYYMMDDHHmmss', serverTimeZone).utcOffset(localOffset).format('YYYYMMDDHHmmss');
        
//         if(length == 6) {
//           return (localTime.substring(0,4) + "-" + localTime.substring(4,6));
//         }

//         if(length == 8) {
//           return (localTime.substring(0,4) + "-" + localTime.substring(4,6) + "-" + localTime.substring(6,8));
//         }

//         else if(length == 14) {
//           return (localTime.substring(0,4) + "-" + localTime.substring(4,6) + "-" + localTime.substring(6,8) + " " + localTime.substring(8,10) + ":" + localTime.substring(10,12) + ":" + localTime.substring(12,14));
//         }

//       return date;
//     },

//     //몇년전, 몇 달전, 몇 일 전
//     fromNow(data) {
//       const duration = this.$moment.duration(this.$moment().diff(data));
//       const years = duration.years();
//       const months = duration.months();
//       const days = duration.days();
//       const hours = duration.hours();
//       const minutes = duration.minutes();

//       if (years > 0) {
//         return `${years} years ago`;
//       } else if (months > 0) {
//         return `${months} months ago`;
//       } else if (days > 0) {
//         return `${days} days ago`;
//       } else if (hours > 0) {
//         return `${hours} hours ago`;
//       } else {
//         return `${minutes} mins ago`;
//       }
//     },

//     getNotiMsg: function(code) {
//       if (code == 'ABE'){
//         return this.$t('noti_event_abe');
//       } else if (code == 'AOFF') {
//         return this.$t('noti_event_aoff');
//       } else if (code == 'AON') {
//         return this.$t('noti_event_aon');
//       }else if (code == 'APE') {
//         return this.$t('noti_event_ape');
//       } else if (code == 'AWE') {
//         return this.$t('noti_event_awe');
//       } else if (code == 'CA') {
//         return this.$t('noti_event_ca');
//       } else if (code == 'CL') {
//         return this.$t('noti_event_cl');
//       } else if (code == 'CWE') {
//         return this.$t('noti_event_cwe');
//       } else if (code == 'NA') {
//         return this.$t('noti_event_na');
//       } else if (code == 'OP') {
//         return this.$t('noti_event_op');
//       } else if (code == 'TPA') {
//         return this.$t('noti_event_tpa');
//       }
//       return code;
//     },

//       // 대시보드 AED EVENT HISTORY bar 색상 변경을 위함. 구현필요
//       // getEventClass: function(code) {
//       //   if (code == 'OPEN'){
//       //     return 'Cabinet Opened'
//       //   } else if (code == 'CLOSE') {
//       //     return 'Cabinet Closed'
//       //   } else if (code == 'ABSENT') {
//       //     return 'AED Absent'
//       //   }else if (code == 'PRESENT') {
//       //     return 'AED Present'
//       //   } else if (code == 'PST') {
//       //     return 'PST'
//       //   } else if (code == 'ERROR') {
//       //     return 'Error'
//       //   } else if (code == 'KEEP') {
//       //     return 'Keep'
//       //   }
//       //   return code; 
//       // },

//       dates: function (date) {
//         let result = date.getFullYear()+(date.getMonth() + 1).toString().padStart(2,'0')+date.getDate().toString().padStart(2,'0');
//         return result
//       },
      
//       getBeforeDateFormat: function (dates) {
//         let date = new Date(dates)

//         if ((date.getMonth() + 1).toString().padStart(2,'0') == '01') {
//           return 'JANUARY ' + date.getFullYear().toString()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '02') {
//           return 'FEBRUARY ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '03') {
//           return 'MARCH ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '04') {
//           return 'APRIL ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '05') {
//           return 'MAY ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '06') {
//           return 'JUNE ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '07') {
//           return 'JULY ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '08') {
//           return 'AUGUST ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '09') {
//           return 'SEPTEMBER ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '10') {
//           return 'OCTOBER ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '11') {
//           return 'NOVEMBER ' + date.getFullYear()
//         } else if ((date.getMonth() + 1).toString().padStart(2,'0') == '12') {
//           return 'DECEMBER ' + date.getFullYear()
//         }
//      },

//      //팝업
//      showPopup(message, path) {
//       this.$store.state.message = message;
//       this.$store.state.path = path;
//       this.$store.state.trigger = true;
//      },

//     //OPEN XAFE
//     opens(deviceSno) {
//       if (deviceSno == '' || deviceSno == null) {
//         this.showPopup('not_exist');
//         return;
//       }
//       this.$axios.get('/xafe/' + deviceSno, {
//         params: {
//           eventType: 'open',
//         }
//       }).then(res => { 
//         this.showPopup(this.$t('transfer_open_event'));
//       }).catch(function (error) {
//         console.log(error);
//       });
//     },

//     //이벤트 toast
//     toast(title, serialNo, contextType) {
//       var message;
//       message = '<span style=\'color: #ffffff;font-size:12px;\' >' + 'Complete the ' + contextType + ' in ' + title + '(' + serialNo + ')' + '</span>';
//       this.$vaToast.init({
//         message: message,
//         dangerouslyUseHtmlString: true,
//         color:'#f28057',
//         offsetX:50,
//         offsetY:70
//       })
//     },
    
//     //온도 -10.0 ~ 20 소수점 첫째 자리까지 입력허용 정규식
//     checkHeatingTemperatureRe(tepmerature){
//       var re = /^(?:-?10(?:\.0)?|-?\d(?:\.\d)?|1\d(?:\.\d)?|20(?:\.0)?)$/;
//       return re.test(tepmerature);
//     },

//     //소수점 첫째자리까지 입력가능한 30~50사이 온도 입력 정규식 
//     checkCoolingTemperatureRe(tepmerature){
//       var re =/^(?:3[0-9](?:\.\d)?|4\d(?:\.\d)?|50(?:\.0)?)$/;
//       return re.test(tepmerature);
//     },

//     //숫자만 허용(ex 휴대폰 번호)
//     regNumber: function (value) {
//       if (value == null || value == '') {
//         return;
//       }
//       const reg = /[^0-9]/;
//       if(reg.exec(value) !== null) {
//         return value.replace(/[^0-9]/g, "").toString();
//       } else {
//         return value;
//       }
//     },

//     //숫자 제거(ex 이름)
//     regNonNumber: function (value) {
//       if (value == null || value == '') {
//         return;
//       }
//       const reg = /[^ㄱ-힣a-zA-Z]/;
//       if(reg.exec(value) !== null) {
//         return value.replace(/[^ㄱ-힣a-zA-Z]/g, "").toString();
//       } else {
//         return value;
//       }
//     },

//     //시작하는 0을 제거한 후 변환
//     regPhoneNumber: function(value) {
//       const reg = /(^0+)/;
//       if(reg.exec(value) !== null) {
//         return value.replace(/(^0+)/, "").toString();
//       } else {
//         return value;
//       }
//     },

//     regNonSpace: function(value) {
//       if(value == null) {
//         return ;
//       }
//       const reg = /\s/;
//       if(reg.exec(value) !== null) {
//         return value.replace(/\s/g, "").toString();
//       } else {
//         return value;
//       }
//     },

//     //이메일 정규식 체크
//     checkEmail: function(email) {
// 			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 			return re.test(email);
// 		},

//     //1부터 4숫자중 네자리 입력 체크
//     checkPassword(password){
//       var re = /^[1-4]{4}$/ ;
//       return re.test(password);
//     },

//     //0부터 100까지 정수 체크
//     checkVolume(volume){
//       var re = /^(100|[1-9]?[0-9])$/ ;
//       return re.test(volume);
//     },

//     checkNull(data) {
//       return data == null ? '-' : data;
//     },

//     /**
//      * 주어진 비밀번호가 생성규칙에 맞는가?(http://venustas.tistory.com/entry/%EC%A0%95%EA%B7%9C%EC%8B%9D 참조)
//      * 1. 영문 대소문자, 숫자, 특수문자 中 2종류 이상 조합
//      * 2. 2종류 문자를 조합한 최소 10자리 이상 또는 3종류 이상 문자를 조합한 최소 8자리 이상
//      * 이용가능한 특수문자는 ~ ` ! @ # $ % ^ & * ( ) _ - + = { } [ ] | \ ; : ' " < > , . ? / 32개
//      * 3. 연속한 3자리가 같은 문자이면 안됨
//      * @param str
//      * @returns {Boolean}
//      */
//     validPassword: function(str) {
//       var password = str;
//       var count = 0;
//       var regEx1 = /[0-9]/gi;
//       var regEx2 = /[a-zA-Z]/gi;
//       var regEx4 = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
//       var regEx5 = /(\w)\1\1/;//같은 영문자&숫자 연속 3번 정규식
//       var regEx6 = /(abc)|(bcd)|(cde)|(def)|(efg)|(fgh)|(ghi)|(hij)|(ijk)|(jkl)|(klm)|(lmn)|(mno)|(nop)|(opq)|(pqr)|(qrs)|(rst)|(stu)|(tuv)|(uvw)|(vwx)|(wxy)|(xyz)/;//연속된 영문자 정규식
//       var regEx7 = /(012)|(123)|(234)|(345)|(456)|(567)|(678)|(789)|(890)/;//연속된 숫자 정규식
    
//       // if(regEx5.exec(password) || regEx6.exec(password) || regEx7.exec(password)) {
//       //    return false;
//       // }
//       if(regEx1.exec(password)) {
//         count++;
//       }
//       if(regEx2.exec(password)) {
//         count++;
//       }
//       if(regEx4.exec(password)) {
//         count++;
//       }
//       if(((count > 2 && password.length >= 8) || (count == 2 && password.length >= 10)) && (password.length <= 16)){
//         return true;
//       }
      
//       return false;
//     },

//   },
// }

