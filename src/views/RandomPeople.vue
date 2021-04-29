<template>
  <div>
    <header>
      <Clock></Clock>
      <div class="container-logo">
        <img class="logo" src="../assets/project-yew-tree-logo-white.png" alt="yewtree logo" />
        <img class="menu-btn" src="../assets/menu-close-white.png" alt="menu close" />
      </div>
    </header>
    <Navigation></Navigation>
    <h3>random people</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'RandomPeople',
  components: {
    Navigation
  }
}
</script>
