import { memo, useState } from "react";

const TodoItem = memo(({ todo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState(todo.text);
    return (
        <div className="flex items-center justify-between gap-2 mt-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <input 
                className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                type="text" 
                value={isEditing ? input : todo.text} 
                onChange={(e) => setInput(e.target.value)} 
                disabled={!isEditing} 
            />
            <div className="flex gap-1">
                {
                    isEditing ? (
                        <>
                            <button 
                                onClick={() => {
                                    onUpdate(input);
                                    setIsEditing(false);
                                }} 
                                className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
                                title="Save"
                            >
                                Save
                            </button>
                            <button 
                                onClick={() => setIsEditing(false)} 
                                className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors text-sm"
                                title="Cancel"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button 
                            onClick={() => setIsEditing(true)} 
                            className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
                            title="Edit"
                        >
                            Edit
                        </button>
                    )
                }
                <button 
                    onClick={onDelete} 
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors text-sm"
                    title="Delete"
                >
                    Delete
                </button>
            </div>
        </div>
    )
});

export default TodoItem; 