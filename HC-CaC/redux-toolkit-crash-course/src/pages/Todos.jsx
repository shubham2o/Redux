import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editTodo, removeTodo } from "../features/todo/todoSlice";
import AddTodo from "../components/AddTodo";
import { MdDoneOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Todos = () => {
    const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState("");

    const handleEditClick = (todo) => {
        setEditId(todo.id);
        setNewText(todo.text);
    };

    const handleSaveClick = (id) => {
        dispatch(editTodo({ id, newText }));
        setEditId(null);
        setNewText("");
    };

    return (
        <div>
            <AddTodo />

            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="mt-4 px-4 py-2 rounded bg-zinc-800 flex justify-between items-center">
                        <div className="w-[86%] text-left leading-10 overflow-y-hidden">
                            {editId === todo.id
                                ?
                                <input
                                    value={newText} onChange={(e) => setNewText(e.target.value)}
                                    className="w-[100%] rounded border border-gray-700 px-3 py-1 leading-8 bg-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none transition-colors duration-200 ease-in-out"
                                />
                                :
                                todo.text
                            }
                        </div>

                        <div className="w-[8.25rem] text-2xl flex gap-1 justify-between items-center">
                            {editId === todo.id
                                ? <button onClick={() => handleSaveClick(todo.id)} className="rounded px-4 py-2 bg-green-600 hover:bg-green-700"><MdDoneOutline /></button>
                                : <button onClick={() => handleEditClick(todo)} className="rounded px-4 py-2 bg-zinc-500 hover:bg-zinc-600"><FaRegEdit /></button>
                            }

                            <button onClick={() => dispatch(removeTodo(todo.id))} className="rounded px-4 py-2 bg-red-600 hover:bg-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
