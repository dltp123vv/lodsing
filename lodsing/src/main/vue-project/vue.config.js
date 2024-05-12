
module.exports = {  
  outputDir: "../resources/static/vue/", // 빌드경로    
  publicPath: '/', // contextPath  "ip:port/admin/"  
  lintOnSave: false,
  
  pages: {
    admin: {                    // 설정할 page의 name
        entry: 'src/main.js',   // 설정한 page의 entry 파일 위치
        template: 'public/admin.html', // 기본 템플릿 파일
        filename: 'admin.html',
        title: 'lodsing ADMIN'
    },
  }
};