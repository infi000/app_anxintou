import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Main from "@/components/Main";
import Loan from "@/components/Main/Loan";
import Interest from "@/components/Interest";
import Me from "@/components/Main/Me";
import Bind from "@/components/Bind";

Vue.use(Router);

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
      path: "/interest",
      name: "interest",
      component: Interest
    },
    {
      path: "/bind",
      name: "bind",
      component: Bind
    },
    {
      path: "/main",
      name: "main",
      component: Main,
      children: []
    }
  ]
});
