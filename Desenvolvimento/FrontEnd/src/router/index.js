import Vue from "vue";

import Home from "./../components/pages/Home";
import Login from "./../components/pages/Login";
import PortalPessoa from "./../components/pages/PortalPessoa";
import PortalEmpresa from "./../components/pages/PortalEmpresa";
import PortalNoticiaE from "./../components/pages/PortalNoticiaE";
import PortalNoticiaP from "./../components/pages/PortalNoticiaP";
import PortalVagaE from "./../components/pages/PortalVagaE";
import PortalVagaP from "./../components/pages/PortalVagaP";
import ChangeMyPass from "./../components/pages/ChangeMyPass";
import sobre from "./../components/pages/sobre";
import perfil from "./../components/pages/perfil";

import VueRouter from "vue-router";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/portal-pessoa", name: "portal-pessoa", component: PortalPessoa },
  { path: "/portal-empresa", name: "portal-empresa", component: PortalEmpresa },
  { path: "/portal-noticiaE", name: "portal-noticiaE", component: PortalNoticiaE },
  { path: "/portal-noticiaP", name: "portal-noticiaP", component: PortalNoticiaP },
  { path: "/portal-vagaE", name: "portal-vagaE", component: PortalVagaE },
  { path: "/portal-vagaP", name: "portal-vagaP", component: PortalVagaP },
  { path: "/sobre", name: "sobre", component: sobre },
  { path: "/perfil", name: "perfil", component: perfil },
  { path: "/change-my-pass", name: "change-my-pass", component: ChangeMyPass }
];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.use(VueRouter);

export {
  router
};
