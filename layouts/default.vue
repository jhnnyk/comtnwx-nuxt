<template>
  <div class="container">
    <TitleBar />
    <MtnList />
    <Nuxt />
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

  watch: {
    $route() {
      this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
    },
  },

  async created() {
    await this.$store.dispatch('mtns/getMtns')

    if (this.$route.params.slug) {
      this.$store.dispatch('mtns/getCurrentMtn', this.$route.params.slug)
    }
  },
}
</script>
