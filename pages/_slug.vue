<template>
  <div class="mtn-info">
    <div v-if="selectedMtn" class="p-4">
      <h1 class="text-indigo-900 text-5xl text-center">
        {{ selectedMtn.name }}
      </h1>
      <p class="text-center">
        <span class="text-xs uppercase">Range:</span> {{ selectedMtn.range }}
      </p>
      <p class="text-center">
        <span class="text-xs uppercase">Elevation:</span>
        {{ selectedMtn.el }} ft.
      </p>

      <h2 class="text-3xl text-indigo-900 text-center pt-6">
        {{ selectedMtn.name }} Weather Forecast
      </h2>
      <div v-if="forecastLoading">... loading weather forecast ...</div>
      <div v-else>
        <div
          v-for="(period, index) in forecast"
          :key="index"
          class="rounded-2xl shadow-xl p-4 mb-6"
        >
          <p class="text-indigo-900 font-bold">
            {{ period.name }} - {{ period.shortForecast }}
          </p>
          <div class="flex flex-row flex-wrap md:flex-nowrap">
            <p class="flex-none w-36 text-center pt-3">
              <span class="text-6xl">{{ period.temperature }}</span>
              <span class="text-lg relative -top-7 right-1"
                >º {{ period.temperatureUnit }}</span
              >
              <br />
              <span class="text-xs uppercase">Wind:</span
              ><span class="font-bold">{{ period.windSpeed }}</span>
            </p>
            <img
              :src="period.icon"
              :alt="period.shortForecast"
              class="flex-none object-scale-down w-28"
            />
            <p class="pt-4">{{ period.detailedForecast }}</p>
          </div>
        </div>
      </div>
      <p class="mt-4">
        For more information about {{ selectedMtn.name }}, including route
        information for climbing {{ selectedMtn.name }} and latest trail
        conditions and trip reports, check
        <a :href="selectedMtn['14ersLink']" target="_blank"
          >{{ selectedMtn.name }} page on 14ers.com</a
        >.
      </p>
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

  head() {
    return {
      title: this.selectedMtn.name + ' - Colorado Mountain Weather',
      meta: [
        {
          hid: this.selectedMtn.slug,
          name: 'description',
          content: 'weather forecast for ' + this.selectedMtn.name,
        },
      ],
    }
  },
}
</script>
