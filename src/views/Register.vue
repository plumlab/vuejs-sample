<template>
  <div class="register">
    <div class="title">{{ $t("register.title") }}</div>
    <b-form @submit="register">
      <b-form-group label-cols="0" label-for="firstname">
        <b-form-input id="firstname" :placeholder="$t('register.input_text.firstname')" name="firstname" v-model="firstname" v-validate="'required'" trim></b-form-input>
        <b-form-invalid-feedback id="firstname-feedback">{{ errors.first('firstname') }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="lastname">
        <b-form-input id="lastname" :placeholder="$t('register.input_text.lastname')" name="lastname" v-model="lastname" v-validate="'required'" trim></b-form-input>
        <b-form-invalid-feedback id="lastname-feedback">{{ errors.first('lastname') }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="email">
        <b-form-input id="email" :placeholder="$t('register.input_text.email')" v-model="email" v-validate="'required|email'" name="email" trim></b-form-input>
        <b-form-invalid-feedback id="email-feedback">{{ errors.first('email') }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="password">
        <b-form-input id="password" type="password" :placeholder="$t('register.input_text.password')" v-model="password" v-validate="{ required: true, min: 8 }" name="password" trim></b-form-input>
        <b-form-invalid-feedback id="password-feedback">{{ errors.first('password') }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="confirmPassword">
        <b-form-input id="confirmPassword" type="password" :placeholder="$t('register.input_text.confirm_password')" v-model="confirmPassword" v-validate="{ required: true, min: 8 }" name="confirmPassword" trim></b-form-input>
        <b-form-invalid-feedback id="confirmPassword-feedback">{{ errors.first('confirmPassword') }}</b-form-invalid-feedback>
      </b-form-group>
      <b-button variant="outline-success" type="submit"><strong>{{ $t("register.buttons.register") }}</strong></b-button>&nbsp;&nbsp;
      <b-button variant="outline-danger" type="reset"><strong>{{ $t("register.buttons.reset") }}</strong></b-button>
      &nbsp;&nbsp;{{ $t("register.text.registered") }}<b-link @click="signin">{{ $t("register.links.signin") }}</b-link>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    signin(event) {
      event.preventDefault()
      this.$router.push({name: "SignIn"})
    },
    register(event) {
      event.preventDefault()
      this.$validator.validate().then(async valid => {
        if (valid) {      
          this.$router.push({name: "Home"})
        }
      })
    }
  }
}
</script>

<style scoped>

.register {
  background-color: #ffffff;
  padding: 2rem 1rem;
  margin-left: 400px;
  margin-right: 400px;
}

.invalid-feedback {
  display: block;
}

</style>
