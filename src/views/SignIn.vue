<template>
  <div class="signin">
    <b-container fluid>
      <b-row class="mb-3" align-h="center">
        <div class="title">Sign In</div>
      </b-row>
      <b-row class="mb-3">
        <b-form-input placeholder="Email address"></b-form-input>
      </b-row>
      <b-row class="mb-3">
        <b-form-input placeholder="Password"></b-form-input>
      </b-row>
      <b-row class="mb-3">
        <b-button variant="outline-success"><strong>Sign in to CharityMe</strong></b-button>
        &nbsp;&nbsp;&nbsp;<b-link>Forgot your password?</b-link>
      </b-row>
    </b-container>
  </div>
</template>

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