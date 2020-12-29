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
          <p>{{ period.name }} - {{ period.shortForecast }}</p>
          <p>
            <span>{{ period.temperature }}</span
            >º {{ period.temperatureUnit }}<br />
            Wind: {{ period.windSpeed }}
          </p>
          <img :src="period.icon" :alt="period.shortForecast" />
          <p>{{ period.detailedForecast }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
  },

  computed: {
    ...mapState('mtns', {
      selectedMtn: (state) => state.currentMtn,
      forecast: (state) => state.forecast,
      forecastLoading: (state) => state.forecastLoading,
    }),
  },

  created() {
    this.$fetch()
  },
}
</script>
