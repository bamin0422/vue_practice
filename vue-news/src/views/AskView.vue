<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import store from "@/store";
import {mapGetters} from "vuex";
import ListItem from "@/components/ListItem.vue";


export default {
  components: {ListItem},
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
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
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
</style>