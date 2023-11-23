import React from "react";

function Footer() {
  const date = new Date();
  return <footer>Copyright &copy; {date.getFullYear()}</footer>;
}

export default Footer;
