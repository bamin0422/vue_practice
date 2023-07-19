<template>
  <div>
    <user-profile :info="userInfo">
      <template v-slot:username><div>{{ userInfo.id }}</div></template>
      <template v-slot:time>{{ `Joined ${userInfo.created}, ${userInfo.karma}` }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import {mapGetters} from "vuex";
import store from "@/store";

export default {
  components: {
    UserProfile,
  },
  computed: {
    store() {
      return store
    },
    ...mapGetters({
      userInfo: `getUserInfo`
    })
  },
  created() {
    const userName = this.$route.params.id;
    store.dispatch(`FETCH_USER_INFO`, userName);
  }
}
</script>

<style>

</style>