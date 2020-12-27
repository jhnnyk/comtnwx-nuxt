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

  async created() {
    await this.$store.dispatch('mtns/getMtns')
  },
}
</script>
