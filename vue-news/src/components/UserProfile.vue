<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"><div>username : {{ info.id }}</div></slot>
      <slot name="time"><div class="time">time : {{ info.created }}</div></slot>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    info: Object
  },
}
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  margin-top: 12px;
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 4px;
}
</style>