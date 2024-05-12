// main.js
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import mixin from '@/mixin/global'
import axios from '@/axios/axios'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
      
    const app = createApp(App)
    
    app.use(createVuestic())
    app.use(router)
    app.mixin(mixin)   
    app.config.globalProperties.$axios = axios;
    app.mount('#app');

