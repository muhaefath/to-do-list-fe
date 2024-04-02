<!-- src/components/TodoList.vue -->

<template>
  <div>
    <h1>To-Do List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span>{{ todo.title }}</span>
        <button class="button-checklist" @click="checklist(todo.id, todo.title)" v-if="!todo.completed">Checklist</button>
        <button class="button-delete" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <div class="input-section">
      <input type="text" v-model="newTodoTitle" placeholder="Enter todo title" />
      <button class="button-add" @click="createTodo">Add Todo</button>
    </div>
    <br>
  </div>
</template>

<script>
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../api';

export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      newTodoTitle: ''
    };
  },
  async mounted() {
    await this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        this.todos = await getAllTodos();
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async createTodo() {
      if (this.newTodoTitle.trim() === '') return;

      try {
        await createTodo({
          title: this.newTodoTitle,
          completed: false
        });
        this.newTodoTitle = '';
        await this.fetchTodos();
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    },
    async checklist(todoId, todoTitle) {
      try {
        await updateTodo(todoId, { title: todoTitle, completed: true });
        await this.fetchTodos();
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    },
    async deleteTodo(todoId) {
      try {
        await deleteTodo(todoId);
        await this.fetchTodos();
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  }
};
</script>

<style scoped>
.button-checklist,
.button-delete {
  margin-left: 10px; /* Adjust the spacing as needed */
}

.input-section {
  margin-top: 10px; /* Adjust the spacing as needed */
}

.todo-item {
  margin-bottom: 10px; /* Adjust the spacing as needed */
}
</style>
