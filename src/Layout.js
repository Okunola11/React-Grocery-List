import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import Contents from "./Contents";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

const Layout = () => {
  const { search, isLoading, fetchError, handleCheck, handleDelete, items } =
    useContext(DataContext);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <SearchItem />
      <Link to="add">ADD</Link>

      <Outlet />
      <main>
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
      <Footer />
    </div>
  );
};

export default Layout;
