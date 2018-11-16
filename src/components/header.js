import React, { Component } from "react";

import "./css/styles.css";

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
  inputChangeHandler=(e)=> {
    // console.log(e.target.value);
    console.log('hey')
  }

  render() {
    /** ONE TYPE OF STYLING
     * const styles = {
        header:{
            background:'#03a9f4'
        },
        logo:{
            color:'#fff',
            fontFamily:'Anton',
            textAlign:'center'
        }
    };
     */
    return (
      <header>
        <div className="logo">LOGO</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
