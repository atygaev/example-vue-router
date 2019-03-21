import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');