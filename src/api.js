// src/api.js

import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL;

export const getAllTodos = async () => {
    try {
        const response = await axios.get(`${apiUrl}/v2/todos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const createTodo = async (todoData) => {
    try {
        const response = await axios.post(`${apiUrl}/v2/todos`, todoData);
        return response.data;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};

export const updateTodo = async (todoId, todoData) => {
    try {
        const response = await axios.put(`${apiUrl}/v2/todos/${todoId}`, todoData);
        return response.data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};

export const deleteTodo = async (todoId) => {
    try {
        const response = await axios.delete(`${apiUrl}/v2/todos/${todoId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};
