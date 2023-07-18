<template>
  <div>
    <p v-for="news in getNewsList">
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small>
        {{ news.time_ago }} by
        <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
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
    ...mapGetters([`getNewsList`])
  },
  created() {
    store.dispatch(`FETCH_NEWS`);
  }
}
</script>

<style>

</style>