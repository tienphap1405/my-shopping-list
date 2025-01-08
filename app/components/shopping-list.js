"use client";
import ManageItems from "./ManageItems";
import { useState } from "react";
export default function ShoppingList() {
    const [Category, setCategory] = useState("");


    return (
        <div>
            <h1 className="text-4xl font-">Shopping List</h1>   
            <ManageItems Category={Category} onChangeCategory={setCategory} /> 
        </div>
    );
}