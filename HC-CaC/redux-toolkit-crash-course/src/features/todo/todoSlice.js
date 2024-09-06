import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: "Hello World" }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo && (todo.text = action.payload.newText);
        }
    },
},
);

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;