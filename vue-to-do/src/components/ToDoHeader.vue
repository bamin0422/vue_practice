<template>
  <div>
    <header>
      <h1>{{ storedHeaderText }}</h1>
    </header>
  </div>
</template>

<script>
import store from "../store/store";
import {mapGetters, mapState} from "vuex";

export default {
  computed: {
    ...mapGetters([`storedHeaderText`])
  }
}

</script>

<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>