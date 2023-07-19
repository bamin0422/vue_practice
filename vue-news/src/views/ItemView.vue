<template xmlns="http://www.w3.org/1999/html">
  <div>
    <section>
      <user-profile :info="fetchedUser">
        <template v-slot:username><router-link v-bind:to="`/user/${fetchedUser.id}`">{{ fetchedUser.id }}</router-link></template>
      </user-profile>
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
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {UserProfile},
  computed: {
    ...mapGetters({
      fetchedItem: `getPostInfo`,
      fetchedUser: `getUserInfo`
    }),
  },
  created() {
    this.fetchItemAndUserData;
  },
  beforeUpdate() {
    this.fetchItemAndUserData;
  },
  actions: {
    fetchItemAndUserData() {
      const postId = this.$route.params.id;
      store.dispatch(`FETCH_POST_INFO`, postId);
      store.dispatch(`FETCH_USER_INFO`, this.fetchedItem.user);
    }
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