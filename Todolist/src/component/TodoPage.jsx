import { useCallback, useMemo, useState } from "react";
import { Plus, Search, ListTodo } from "lucide-react";
import TodoItem from "./TodoItem.jsx";

const TodoPage = () => {

    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");

    const handleAddTodo = useCallback((text) => {
        const newTodo = {
            id: todos.length + 1 + Date.now(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
        }
        setTodos([...todos, newTodo]);
    }, [input]);

    const handleUpdateTodo = useCallback((index, text) => {
        setTodos((prev) => {
            const newTodo = [...prev];
            newTodo[index].text = text;
            return newTodo;
        });
    }, []);

    const handleDeleteTodo = useCallback((index) => {
        setTodos((prev) => {
            const newTodo = [...prev];
            newTodo.splice(index, 1);
            return newTodo;
        });

    }, []);
    const filteredTodos = useMemo(() => todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())), [todos, search]);
    return (

        <div className="bg-white p-4 rounded-lg shadow-md w-[500px]">
            <div className="flex items-center justify-center gap-2 mb-4">
                <ListTodo className="w-8 h-8 text-blue-500" />
                <h1 className="text-2xl font-bold text-center text-gray-500">Todo List</h1>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-300 pb-4 mb-4">
                <div className="flex items-center justify-between gap-1">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a new todo" className="w-3/4 p-2 rounded-md border border-gray-300" />
                    <button onClick={() => {
                        handleAddTodo(input);
                        setInput("");
                    }} className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/4 hover:bg-blue-600 flex items-center justify-center gap-1">
                        <Plus className="w-4 h-4" />
                        Add
                    </button>
                </div>

                <div className="flex items-center justify-between relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search a todo" className="w-full p-2 pl-10 rounded-md border border-gray-300" />
                </div>
            </div>




            <div>
                {
                    filteredTodos.map((todo, index) => (
                        <TodoItem key={todo.id} todo={todo} onUpdate={(text) => handleUpdateTodo(index, text)} onDelete={() => handleDeleteTodo(index)} />
                    ))
                }
            </div>
        </div>

    )
};

export default TodoPage;