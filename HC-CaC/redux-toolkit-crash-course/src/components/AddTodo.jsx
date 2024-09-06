import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input type="text" placeholder="Enter a Todo..." value={input} onChange={(e) => setInput(e.target.value)}
                className="rounded border border-gray-700 px-3 py-1 leading-8 bg-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none transition-colors duration-200 ease-in-out"
            />

            <button type="submit" className="rounded-md py-2 px-5 text-lg bg-indigo-700 focus:outline-none hover:bg-indigo-800">Add Todo</button>
        </form>
    )
}

export default AddTodo;