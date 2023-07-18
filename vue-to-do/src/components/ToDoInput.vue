<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo">
    <span class="addContainer" v-on:click="addToDo">
      <i class="fa-solid fa-plus addButton"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3 slot="header">
          경고!
          <i class="closeModalButton fas fa-times" @click="showModal = false"></i>
        </h3>
      </template>
      <template #body>글자를 입력해주세요.</template>
      <template #footer><span></span></template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal.vue";
import store from "@/store/store";
import {mapMutations} from "vuex";
export default {
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: ``,
      showModal: false
    }
  },
  methods: {
    ...mapMutations([`addOneItem`]),
    addToDo() {
      if (this.newTodoItem !== ``) {
        this.addOneItem(this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = ``;
    }
  }
}

</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  width: 90%;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addButton {
  color: white;
  vertical-align: middle;
}
.closeModalButton {
  color: #42b983;
}
</style>