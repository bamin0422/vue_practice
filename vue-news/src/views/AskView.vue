<template>
  <div>
    <p v-for="ask in getAskList">
      <router-link v-bind:to="`item/${ask.id}`">{{ ask.title }}</router-link>
      <small>
        {{ ask.time_ago }} by
        <router-link v-bind:to="`/user/${ask.user}`">{{ ask.user }}</router-link>
      </small>
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
    ...mapGetters([`getAskList`])
  },
  created() {
    store.dispatch(`FETCH_ASKS`);
  }
}
</script>

<style>

</style>