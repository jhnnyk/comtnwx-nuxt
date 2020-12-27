<template>
  <div class="container">
    <TitleBar />
    <Nuxt />
  </div>
</template>

<script>
import TitleBar from '../components/TitleBar'

export default {
  components: {
    TitleBar,
  },

  async created() {
    await this.$store.dispatch('mtns/getMtns')
  },
}
</script>
