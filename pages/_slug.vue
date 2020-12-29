<template>
  <div class="mtn-info">
    <div v-if="selectedMtn" class="p-4">
      <h1 class="text-indigo-900 text-5xl">{{ selectedMtn.name }}</h1>
      <p>{{ selectedMtn.range }}</p>
      <p>{{ selectedMtn.el }} ft.</p>

      <h2>{{ selectedMtn.name }} Weather Forecast</h2>
      <div v-if="forecastLoading">... loading weather forecast ...</div>
      <div v-else>
        <div v-for="(period, index) in forecast" :key="index">
          {{ period.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('mtns', {
      selectedMtn: (state) => state.currentMtn,
      forecast: (state) => state.forecast,
      forecastLoading: (state) => state.forecastLoading,
    }),
  },

  watch: {
    $route() {
      this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
    },
  },

  async created() {
    // get all mountains
    await this.$store.dispatch('mtns/getMtns')

    this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
  },
}
</script>
