<template>
  <div class="forgot-password">
    <b-form @submit="forgot">
      <div class="title">{{ $t("forgot-password.title") }}</div>
      <div class="solid-line mb2x"></div>
      <span>{{ $t("forgot-password.text.description") }}</span>
      <br>
      <b-form-group label-cols="0" label-for="email">
        <b-form-input
          id="email"
          name="email"
          v-model="email"
          v-validate="'required|email'"
          :state="validateState('email')"
          aria-describedby="email-feedback"
          :placeholder="$t('forgot-password.input_text.email')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="email-feedback">
          {{ errors.first('email') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="outline-success" type="submit" :disabled="errors.any()">
        <strong>{{ $t("forgot-password.buttons.forgot") }}</strong>
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions('account', ['forgotPassword']),
    forgot(event) {
      event.preventDefault()
      this.$validator.validate().then(async valid => {
        if (valid) {
          const {email} = this
          await this.forgotPassword({email})
          this.$router.push({name: "SignIn"})
        }
      })
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

.forgot-password {
  background-color: #ffffff;
  padding: 4rem 2rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>