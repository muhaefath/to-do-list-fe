<!-- src/App.vue -->

<template>
  <div id="app">
      <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
      TodoList,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
