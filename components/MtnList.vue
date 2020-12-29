<template>
  <div class="flex-none w-1/4">
    <ul>
      <li v-for="(range, index) in mtnsByRange" :key="index">
        <h3 class="text-2xl pt-4">{{ range.name }}</h3>
        <ul>
          <li v-for="mtn in range.mtns" :key="mtn.slug">
            <nuxt-link
              :to="{ name: 'slug', params: { ...mtn } }"
              class="hover:text-indigo-900"
            >
              {{ mtn.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('mtns', ['mtnsByRange']),
  },
}
</script>
