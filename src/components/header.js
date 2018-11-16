import React from "react";

import "./css/styles.css";


const Header=(props)=> {
  console.log(props.found);
    return <header style={{ background: `${props.found ? "blue" : "red"}` }}>
        <div className="logo">LOGO</div>
        {/* <input type="text" onChange={this.inputChangeHandler} /> */}
        {/**see line number 44 to know why we are using .bind(this) and fat arrow function*/}

        <input type="text" onChange={props.keyword} />
         <div>
            {!props.found &&<span>Sorry, The keyword you have searched for is not found!!!!</span>}
          </div>
      </header>;
}

export default Header;
