<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <div>{{ userInfo.id }}</div>
      <div class="time">{{ userInfo.created }}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import store from "@/store";

export default {
  computed: {
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
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  margin-top: 12px;
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 24px;
}
</style>