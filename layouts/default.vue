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

  async created() {
    // get all mountains
    await this.$store.dispatch('mtns/getMtns')
  },
}
</script>
