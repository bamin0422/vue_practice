<template>
  <div>
    <p v-for="job in getJobList">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}</small>
    </p>
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