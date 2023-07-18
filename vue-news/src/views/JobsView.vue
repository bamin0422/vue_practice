<template>
  <div>
    <div v-for="job in getJobList">{{ job.title }}</div>
  </div>
</template>

<script>
import store from "@/store";
import {mapGetters} from "vuex";
export default {
  computed: {
    store() {
      return store
    },
    ...mapGetters([`getJobList`])
  },
  created() {
    store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>