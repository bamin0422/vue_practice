<template>
  <div id="app">
    <ToDoHeader></ToDoHeader>
    <ToDoInput></ToDoInput>
    <ToDoList></ToDoList>
    <ToDoFooter></ToDoFooter>
  </div>
</template>

<script>
import ToDoHeader from "@/components/ToDoHeader.vue";
import ToDoInput from './components/ToDoInput.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoFooter from './components/ToDoFooter.vue';
import store from "@/store/store";

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    ToDoHeader,
    ToDoList,
    ToDoInput,
    ToDoFooter
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
