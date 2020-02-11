import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import account from "./main/Account.vue";
import goodlist from "./main/GoodsList.vue";

Vue.use(VueRouter);


const vuerouter  = new VueRouter({
  routes : [
    {path : "/account",component : account},
    {path : "/goodlist",component : goodlist},
  ]
})
new Vue({
  el: '#app',
  render: h => h(App),
  router : vuerouter
})


