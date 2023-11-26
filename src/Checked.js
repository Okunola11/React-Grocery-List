import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Checked = ({ item, handleDelete }) => {
  return (
    <li className="item">
      <label>{item.item}</label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default Checked;
