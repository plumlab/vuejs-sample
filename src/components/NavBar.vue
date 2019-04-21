<template>
    <b-navbar toggleable="lg" type="light" variant="light" sticky>
      <b-navbar-brand href="#">Charity</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link v-bind:to="{name: 'Home'}">Home</router-link></b-nav-item>
          <b-nav-item href="#">Fundraise</b-nav-item>
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" placeholder="Search"></b-form-input>
          </b-nav-form>
          <b-nav-item-dropdown right :text="name" v-if="isLoggedIn">
            <b-dropdown-item v-on:click="signout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item right v-else><router-link v-bind:to="{name: 'SignIn'}">Sign in</router-link></b-nav-item>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  computed: {
    name() {
      if (this.$store.state.user) {
        return this.$store.state.user.name
      }
      return ''
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },

  methods: {
    async signout() {
      await this.$store.dispatch('signOut')
      this.$router.push({name: "Home"})
    }
  }
}
</script>
