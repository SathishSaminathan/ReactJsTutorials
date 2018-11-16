import React from "react";

const _getDate = () => {
  const date = new Date();
  return date.getHours();
};

const Header = () => {
  return _getDate();
};

export default Header;
