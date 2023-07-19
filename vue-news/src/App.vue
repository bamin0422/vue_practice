<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition-group name="fade">
      <router-view></router-view>
      <spinner :loading="showSpinner"></spinner>
    </transition-group>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  data() {
    return {
      showSpinner: false
    }
  },
  components: {
    Spinner,
    ToolBar,
  },
  created() {
  },
  methods: {
    startSpinner() {
      this.showSpinner = true;
    },
    endSpinner() {
      this.showSpinner = false;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
