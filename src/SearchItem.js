import React from "react";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

const SearchItem = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <form action="" className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
