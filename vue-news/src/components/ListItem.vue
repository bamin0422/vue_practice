<template>
  <div>
    <ul>
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || `*` }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>
          <template v-if="item.user">
            <small class="link-text">
              by
              <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";


export default {
  data() {
    return {
      name: this.$route.name
    }
  },
  computed: {
    store() {
      return store
    },
    listItems() {
      console.log(this.name);
      if (this.name === 'News') {
        return store.getters.getNewsList;
      } else if (this.name === 'Jobs') {
        return store.getters.getJobList;
      } else {
        return store.getters.getAskList;
      }
    }
  },
  created() {
    if (this.name === 'News') {
      store.dispatch(`FETCH_NEWS`);
    } else if (this.name === 'Jobs') {
      store.dispatch(`FETCH_JOBS`);
    } else {
      store.dispatch(`FETCH_ASKS`);
    }
  },
}
</script>

<style>
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.link-text {
  color: #828282;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #42b883;
}
</style>