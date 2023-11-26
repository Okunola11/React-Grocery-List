import React from "react";
import Checked from "./Checked";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

export const CheckedItem = () => {
  const { items } = useContext(DataContext);

  return (
    <>
      {items.map((item) =>
        item.checked === true ? (
          <Checked item={item} key={item.id} />
        ) : (
          <p> You have no Checked items</p>
        )
      )}
    </>
  );
};
