<template xmlns="http://www.w3.org/1999/html">
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>
    </section>
    <section>
      <div v-html="fetchedItem.content"/>
    </section>
  </div>
</template>

<script>
import store from "@/store";
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedItem: `getPostInfo`
    })
  },
  created() {
    const postId = this.$route.params.id;
    store.dispatch(`FETCH_POST_INFO`, postId);
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
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 7px;
}
</style>