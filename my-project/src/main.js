// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {changeColor,upper} from './directive/changeColor'
import store from './store/store';
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'xX2WyxqSrQek7sYQAEXUGYZmMH6yo2id'
})
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
Vue.prototype.$echarts=echarts;

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if(sessionStorage.name ==='user'){
         next()
      }else {
         next({
           path: '/login'
          })
        }
    }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
