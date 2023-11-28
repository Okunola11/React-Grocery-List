import React from "react";
import SearchItem from "./SearchItem";
import Contents from "./Contents";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import { useContext, useState } from "react";
import DataContext from "./Context/DataContext";
import apiRequest from "./apiRequest";

const AddItem = () => {
  const {
    items,
    setItems,
    API_URL,
    setFetchError,
    isLoading,
    fetchError,
    search,
    handleCheck,
    handleDelete,
  } = useContext(DataContext);
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
    <>
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
      <main>
        <SearchItem />
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Contents
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
    </>
  );
};

export default AddItem;
