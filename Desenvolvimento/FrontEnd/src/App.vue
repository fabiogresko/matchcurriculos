<template>
  <div id="app">
    
    <!-- Header -->
    <headerHome/>          
    
    <!-- Main -->
    <main>
      <router-view></router-view>
    </main>
    
    <!-- Footer -->
    <footerHome/>

  </div>
</template>

<script>

// Import da página home
import FooterHome from './components/pages/Footer-home'
import Home from './components/pages/Home'
import HeaderHome from './components/pages/Header-home'
import PortalEmpresa from './components/pages/PortalEmpresa'
//import PortalNoticiaE from "./../components/pages/PortalNoticiaE";
//import PortalNoticiaP from "./../components/pages/PortalNoticiaP";
//import PortalVagaE from "./../components/pages/PortalVagaE";
//import PortalVagaP from "./../components/pages/PortalVagaP";
import PortalPessoa from './components/pages/PortalPessoa'
import Login from './components/pages/Login'
export default {
  name: 'app',
  components: {
    FooterHome,
    Home,
    HeaderHome,
    PortalEmpresa,
    //PortalNoticiaE,
    //PortalNoticiaP,
    //PortalVagaE,
    //PortalVagaP,
    PortalPessoa,
    Login
  }
}
</script>

<style lang="scss">
  @import './assets/styles/variables';
  @import './assets/styles/bootstrap';
  @import "./../node_modules/@voerro/vue-tagsinput/dist/style.css";
</style>



