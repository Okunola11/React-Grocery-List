import React from "react";
import { Link } from "react-router-dom";
import Contents from "./Contents";
import SearchItem from "./SearchItem";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

const Home = () => {
  const { search, isLoading, fetchError, handleCheck, handleDelete, items } =
    useContext(DataContext);
  return (
    <main>
      {/*  <Link to="add">
        <button className="addButton">ADD</button>
      </Link> */}
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
  );
};

export default Home;
