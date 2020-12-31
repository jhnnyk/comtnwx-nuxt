<template>
  <div class="text-center p-8">
    <h2 class="text-3xl">
      Welcome to
      <nuxt-link :to="{ name: 'index' }">ColoradoMountainWeather.com</nuxt-link>
    </h2>
    <p>
      <nuxt-link :to="{ name: 'index' }">ColoradoMountainWeather.com</nuxt-link>
      aims to be the most accurate weather forecast for Colorado's 14,000 ft.
      peaks.
    </p>
    <p>
      Please select a mountain from the list on the left to see the current
      weather and the weather forecast for the selected mountain.
    </p>
    <p>
      Need help deciding? Maybe try Colorado's highest peak,
      <a href="/mt_elbert">Mt. Elbert</a>, or perhaps the iconic
      <a href="/pikes_peak">Pikes Peak</a>!
    </p>
    <p>
      <img
        src="/images/IMG_0947.jpeg"
        alt="looking west from the summit of Mt. Evans"
      />
      looking west from the summit of <a href="/mt_evans">Mt. Evans</a>
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
