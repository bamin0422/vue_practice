<template>
  <div>
    <p>name : {{ getUserInfo.id }}</p>
    <p>karma : {{ getUserInfo.karma }}</p>
    <p>created : {{ getUserInfo.created }}</p>
  </div>
</template>

<script>
import store from "@/store";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([`getUserInfo`])
  },
  created() {
    const userName = this.$route.params.id;
    store.dispatch(`FETCH_USER_INFO`, userName);
  }
}
</script>

<style>

</style>