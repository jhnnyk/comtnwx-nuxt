<template>
  <div class="mtn-info">
    <div v-if="selectedMtn" class="p-4">
      <h1 class="text-indigo-900 text-5xl">{{ selectedMtn.name }}</h1>
      <p>{{ selectedMtn.range }}</p>
      <p>{{ selectedMtn.el }} ft.</p>
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
