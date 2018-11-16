import React, { Component } from "react";

// const _getDate = () => {
//   const date = new Date();
//   return date.getHours();
// };

/**
 * function based components are used to just render the but getting are without getting the values from the other components
 */
// const Header = () => {
//   return (
//       <header>
//           <div>LOGO</div>
//           <input />
//       </header>
//   );
// };

/**
 * class based components are used to get the values like props states from the rest components
 */
class Header extends Component {
  render() {
    return (
      <header>
        <div>LOGO</div>
        <input />
      </header>
    );
  }
}

export default Header;
