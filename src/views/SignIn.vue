<template>
  <div class="signin">
    <b-container fluid>
      <b-row class="mb-3" align-h="center">
        <div class="title">{{ $t("signin.title") }}</div>
      </b-row>
      <b-row class="mb-3">
        <b-form-input :placeholder="$t('signin.input_text.email')" v-model="email"></b-form-input>
      </b-row>
      <b-row class="mb-3">
        <b-form-input type="password" :placeholder="$t('signin.input_text.password')" v-model="password"></b-form-input>
      </b-row>
      <b-row class="mb-3">
        <b-button variant="outline-success" v-on:click.once="signin"><strong>{{ $t("signin.buttons.signin") }}</strong></b-button>
        &nbsp;&nbsp;&nbsp;<b-link>{{ $t("signin.links.forgot_password") }}</b-link>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('account', ['signIn']),
    async signin() {
      await this.signIn()
      this.$router.push({name: "Home"})
    }
  }
}
</script>

<style scoped>

.signin {
  background-color: #ffffff;
  padding: 4rem 1rem;
  margin-left: 400px;
  margin-right: 400px;
}

.title {
  color: #333;
  font-weight: 900;
  font-size: 2.5rem;
}

</style>