import React from "react";
import Checked from "./Checked";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

export const CheckedItem = () => {
  const { items } = useContext(DataContext);
  const checkedItems = items.filter((item) => item.checked === true);

  return (
    <ul>
      {checkedItems.length ? (
        checkedItems.map((item) => <Checked item={item} key={item.id} />)
      ) : (
        <p> You have no Checked items</p>
      )}
    </ul>
  );
};
