<template>
  <div class="home">
    <header>
      <Clock></Clock>
      <div class="container-logo">
        <img class="logo" src="../assets/project-yew-tree-logo-white.png" alt="yewtree logo" />
        <img class="menu-btn" src="../assets/menu-close-white.png" alt="menu close" />
      </div>
    </header>
    <Navigation></Navigation>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Clock from '@/components/Clock.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Clock,
    Navigation
  }
}
</script>

<style lang="scss">
  .home {
    background: url('../assets/yew-tree.jpg') no-repeat 50% fixed;
    background-size: cover;
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  header {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 760px;
  }

  .container-logo {
    align-items: center;
    background-color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 120px;
    width: 760px;

    .logo {
      margin-left: 30px;
      width: 80%;
    }

    .menu-btn {
      margin-right: 40px;
      height: 45px;
      width: 45px;
      transform: rotate(45deg);
    }
  }
</style>
