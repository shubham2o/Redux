import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
    todos: [{ id: nanoid(), text: "Hello World" }]
=======
    todos: [{ id: 1, text: "Hello World" }]
>>>>>>> 3104b77c9694f1b8d40b3ce24af9606db238ed62
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;