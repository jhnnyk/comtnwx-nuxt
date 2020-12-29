<template>
  <div class="text-center p-8">
    <h2 class="text-3xl">
      Welcome to
      <nuxt-link :to="{ name: 'index' }">ColoradoMountainWeather.com</nuxt-link>
    </h2>
    <p>the most accurate weather forecast for Colorado's 14ers</p>
    <p>
      Please select a mountain to see the current weather and the weather
      forecast.
    </p>
    <p>
      Need help deciding? Maybe try Colorado's highest peak,
      <a href="/mt_elbert">Mt. Elbert</a>; or perhaps the iconic
      <a href="/pikes_peak">Pikes Peak</a>!
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
p {
  @apply mb-4;
}
</style>
