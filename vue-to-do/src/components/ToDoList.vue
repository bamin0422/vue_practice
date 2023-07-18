<template>
  <div>
      <ul >
        <li v-for="(todoItem, index) in storedTodoItems" v-bind:key="todoItem" class="shadow">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted  : todoItem.completed}"
             v-on:click="toggleComplete({ todoItem, index })"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeToDo({ todoItem, index })">
        <i class="fa-solid fa-trash"></i>
      </span>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import todoApp from "@/store/modules/todoApp";

export default {
  computed: {
    ...mapGetters([`storedTodoItems`])
  },
  methods: {
    ...mapMutations({
      removeToDo: `removeOneItem`,
      toggleComplete: `updateOneItem`
    })
  },
}

</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 12px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active, .list-leave-active {
  transition: opacity .5s;
}

.list-enter, .list-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>