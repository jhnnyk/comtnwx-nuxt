<template>
  <div class="mtn-info">
    <div v-if="selectedMtn">
      <h1>{{ selectedMtn.name }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('mtns', {
      selectedMtn: (state) => state.currentMtn,
    }),
  },
}
</script>
