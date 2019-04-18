<template>
  <div id="app">
    <NavBar />
    <div id="main_section">
      <KeyMarketing />
    </div>
    <section id="content_section">
      <b-container>
        <FundRaise />
      </b-container>
    </section>    
    <footer id="footer">
      <b-container>
        <div class="solid-line mb4x"></div>
        <div>© 2019 Charity Me</div>
      </b-container>
    </footer>
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
  font-family: Lato,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

#content_section {
  padding: 4rem 1rem;
}


.solid-line {
  background: 0;
  border-bottom: 1px solid #ddd;
}

.mb4x {
  margin-bottom: 4rem!important;
}

</style>
