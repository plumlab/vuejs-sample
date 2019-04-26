<template>
  <div class="signin">
    <div class="title">{{ $t("signin.title") }}</div>
    <div class="solid-line mb2x"></div>
    <b-form @submit="signin">
      <b-form-group label-cols="0" label-for="email">
        <b-form-input
          id="email"
          name="email"
          v-model="email"
          v-validate="'required|email'"
          :state="validateState('email')"
          aria-describedby="email-feedback"
          :placeholder="$t('signin.input_text.email')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="email-feedback">
          {{ errors.first('email') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="password">
        <b-form-input
          id="password"
          name="password"
          type="password"
          v-model="password"
          v-validate="{ required: true, min: 8 }"
          :state="validateState('password')"
          aria-describedby="password-feedback"
          :placeholder="$t('signin.input_text.password')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="password-feedback">
          {{ errors.first('password') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="outline-success" type="submit" :disabled="errors.any()">
        <strong>{{ $t("signin.buttons.signin") }}</strong>
      </b-button>
      &nbsp;&nbsp;&nbsp;<b-link @click="forgotPassword">{{ $t("signin.links.forgot_password") }}</b-link>
    </b-form>
    <br>
    {{ $t("signin.text.new") }}<b-link @click="signup">{{ $t("signin.links.signup") }}</b-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('account', ['signIn']),
    signin(event) {
      event.preventDefault()
      this.$validator.validate().then(async valid => {
        if (valid) {
          const {email, password} = this
          await this.signIn({email, password})
          this.$router.push({name: "Home"})
        }
      })
    },
    signup(event) {
      event.preventDefault()
      this.$router.push({name: "SignUp"})
    },
    forgotPassword(event) {
      event.preventDefault()
      this.$router.push({name: "ForgotPassword"})
    },
    validateState(ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.errors.has(ref)
      }
      return null
    }
  }
}
</script>

<style scoped>

.signin {
  background-color: #ffffff;
  padding: 2rem 1rem;
  margin-left: 400px;
  margin-right: 400px;
}

</style>