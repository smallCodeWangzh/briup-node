import Vue from 'vue'

import login from "./login.vue"

new Vue({
  el : "#app",
  render : c => c(login)
})

import test,{title,content} from "./test.js"
console.info(test.msg);
console.info(title + content);

