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
  /**
   * constructor(props) {        // creating our own constructors which is getting props from React.Component by using super keyword
    super(props);
    this.state={                 // since we are extending from the React.Component our class is already having the state so we no need to give this.state
        name: "",
        placeholder: ""
    }
  }
   */
  state = {
    name: "",
    placeholder: ""
  };

  inputChangeHandler = e => {
    console.log(this);                              
    //arrow functions are used to get the "this" value of the current environment
    console.log("hey");
    this.setState({                                 
        //in this statement "this" points out to the inputChangeHandler function, Inorder to tell that "this" is for our class we need to call the inputChangeHandler like "this.inoutChangeHandle.bind(this)", ".bind(this)" is used to tell that "this" is for the class. or we can use simple fat arrow function in order to acheive this. 
      name: e.target.value
    });
  };

  render() {
    console.log(this.state.name);
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
        <input type="text" onChange={this.inputChangeHandler} />     {/**see line number 44 to know why we are using .bind(this) and fat arrow function*/}
        <div>You have Entered....{this.state.name}</div>
      </header>
    );
  }
}

export default Header;
