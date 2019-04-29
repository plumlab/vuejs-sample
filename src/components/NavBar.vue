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
          <b-nav-item-dropdown right :text="username" v-if="status.isLoggedIn">
            <b-dropdown-item v-on:click="signout"><span>Sign Out</span></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item right v-else><router-link v-bind:to="{name: 'SignIn'}">Sign in</router-link></b-nav-item>
          <div class="sign-in-user-avatar">
            <b-img src="https://graph.facebook.com/v2.3/10206470121935600/picture?" v-if="status.isLoggedIn"></b-img>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('account', ['user', 'status']),
    username: function() {
      if (this.user) {
        return this.user.data.firstname + " " + this.user.data.lastname
      }
      return ''
    }
  },

  methods: {
    ...mapActions('account', ['signOut']),
    async signout() {
      this.signOut().then(() => {
        this.$router.push({name: "Home"})
      }).catch(() => {
        this.$router.push({name: "SignIn"})
      })
    }
  }
}
</script>

<style scoped>

.sign-in-user-avatar img {
  display: inline-block;
  border-radius: 100%;
  transition: all 0.2s ease;
  max-height: 40px;
}

</style>
