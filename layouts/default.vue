<template>
  <div class="text-gray-700">
    <TitleBar />
    <main class="container flex flex-row p-6">
      <MtnList />
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TitleBar from '../components/TitleBar'
import MtnList from '../components/MtnList'

export default {
  components: {
    TitleBar,
    MtnList,
  },

  async fetch() {
    await this.$store.dispatch('mtns/getMtns')

    if (this.$route.params.slug) {
      this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
    }
  },

  watch: {
    $route() {
      this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
    },
  },
}
</script>
