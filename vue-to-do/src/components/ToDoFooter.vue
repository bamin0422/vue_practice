<template>
  <div class="clearAllContainer" v-on:click="clearToDo">
    <span class="clearAllButton shadow">Clear All</span>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
        clearToDo: `clearAllItems`
    })
  }
}

</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllButton {
  color: #e20303;
  display: block;
}
</style>