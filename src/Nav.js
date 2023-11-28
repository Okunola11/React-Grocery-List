import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li> Home</li>
        </Link>
        <Link to="add">
          <li>Add item</li>
        </Link>
        <Link to="check">
          <li>Checked</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
