<template>
<div>
  <div id="main_section">
    <KeyMarketing />
  </div>
  <div id="content_section">
    <b-container>
      <FundRaise />
    </b-container>
  </div>
</div>
</template>

<script>
import FundRaise from '@/components/FundRaise.vue'
import KeyMarketing from '@/components/KeyMarketing.vue'

export default {
  name: 'home',
  components: {
    FundRaise, KeyMarketing
  }
}
</script>

<style scoped>
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