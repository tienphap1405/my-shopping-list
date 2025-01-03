"use client";
import { useState } from "react";

export default function ManageItems() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [newQuantity, setNewQuantity] = useState(1);
    const [newCategory, setNewCategory] = useState("");
    
    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };    
    
    const handleAddQuantity = (id) => {
        setItems(items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const handleDeleteQuantity = (id) => {
        setItems(
            items
                .map((item) => {
                    if (item.id === id) {
                        if (item.quantity === 1) {
                            deleteItem(id);
                            return null;
                        }
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter(Boolean)
        );
    };

    const addItem = (e) => {
        e.preventDefault(); // Prevent form submission

        // Validate inputs
        if (!newItem.trim() || !newCategory.trim() || newQuantity <= 0) {
            alert("Please provide valid inputs.");
            return;
        }

        setItems([
            ...items,
            {
                id: items.length + 1,
                name: newItem.trim(),
                quantity: parseInt(newQuantity, 10),
                category: newCategory.trim(),
            },
        ]);

        // Clear input fields after adding
        setNewItem("");
        setNewQuantity(1);
        setNewCategory("");
    };

    return (
        <form onSubmit={addItem}>
            <div className="flex m-2">
                <input
                    className="p-2 m-2 border-2 border-black text-black"
                    required
                    type="text"
                    placeholder="Item name"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <input
                    className="p-2 m-2 border-2 border-black text-black"
                    required
                    type="number"
                    placeholder="Quantity"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                />
                <input
                    className="p-2 m-2 border-2 border-black text-black"
                    required
                    type="text"
                    placeholder="Category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-white text-black rounded-full p-1 m-2 text-black border-2 border-black"
                >
                    Add +
                </button>
            </div>
            <div>
                {items.map((item) => (
                    <div key={item.id} className="flex m-2">
                        <div className="flex text-2xl flex-col bg-orange-100 text-black rounded-lg border-2 border-black shadow-lg p-2 m-2"> 
                            {item.name}
                            <div className="text-xl">Quantity: {item.quantity}</div>
                        </div>
                        <div className="flex flex-col rounded-full p-2 m-2">
                            <button
                                className="bg-white text-black rounded-full p-1 border-2 border-black"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleDeleteQuantity(item.id);
                                }}
                            >
                                Delete -
                            </button>
                            <button
                                className="bg-white text-black rounded-full p-1 border-2 border-black"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAddQuantity(item.id);
                                }}
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </form>
    );
}
