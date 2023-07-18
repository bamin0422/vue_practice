<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ halfPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([`originalPrice`, `halfPrice`, `doublePrice`, `triplePrice`])
  }
}
</script>

<style>

</style>