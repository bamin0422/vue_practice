<template>
  <div>
    <div v-for="ask in getAskList">{{ ask.title }}</div>
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
    ...mapGetters([`getAskList`])
  },
  created() {
    store.dispatch(`FETCH_ASKS`);
  }
}
</script>

<style>

</style>