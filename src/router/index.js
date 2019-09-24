import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login";
import Register from "@/components/Register";
import Main from "@/components/Main";
import Loan from "@/components/Main/Loan";
import Me from '@/components/Main/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/main",
      name: "main",
      component: Main,
      children: [
        {
          path: "loan",
          name: "loan",
          component: Loan
        },
        {
          path: "me",
          name: "me",
          component: Me
        }
      ]
    }
  ]
});
