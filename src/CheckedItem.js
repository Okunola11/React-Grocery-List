import React from "react";
import Checked from "./Checked";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

export const CheckedItem = () => {
  const { items, handleDelete } = useContext(DataContext);
  const data = items.filter((item) => item.checked === true);
  return (
    <ul>
      <li>{data.item}</li>
    </ul>
  );
};
