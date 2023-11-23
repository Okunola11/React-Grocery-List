import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import { useContext, useState } from "react";
import DataContext from "./Context/DataContext";
import apiRequest from "./apiRequest";

const AddItem = () => {
  const { items, setItems, API_URL, setFetchError } = useContext(DataContext);
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form className="addForm" onSubmit={handleSubmit} action="">
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        autoFocus
        ref={inputRef}
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
