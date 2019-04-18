<template>
  <div id="app">
    <NavBar />
    <div id="main">
      <section id="main_section">
        <KeyMarketing />
        <b-container>
          <FundRaise />
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import KeyMarketing from './components/KeyMarketing.vue'
import FundRaise from './components/FundRaise.vue'

export default {
  name: 'charity',
  components: {
    NavBar, KeyMarketing, FundRaise
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
