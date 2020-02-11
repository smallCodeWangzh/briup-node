import Account from "./main/Account.vue";
import GoodsList from "./main/GoodsList.vue";
import Login from "./main/children/Login.vue"
import Register from "./main/children/Register.vue"
import VueRouter from "vue-router";



const router = new VueRouter({
  routes : [
    {path : "/account",component : Account,children:[
      {path : "login",component: Login},
      {path : "register",component: Register}
    ]},
    {path : "/goodlist",component : GoodsList }
  ]
});
export default router;