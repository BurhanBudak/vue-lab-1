<template>
  <div>
    <nav-bar />
    <hero />
    <lowFooter/>
  </div>
</template>

<script>
import lowFooter from './components/Footer.vue'
import Hero from './components/Hero.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: "MyApp",
  components: {
    NavBar,
    Hero,
    lowFooter,
}
}
</script>

<style>

</style>