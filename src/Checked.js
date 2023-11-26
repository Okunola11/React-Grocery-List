import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Checked = ({ item, key }) => {
  return (
    <ul key={key}>
      <li>{JSON.stringify(item.item)}</li>
    </ul>
  );
};

export default Checked;
