import React from "react";

import { css } from "glamor";

// const NewsItem = ({items}) => {  /** In this we are using structuring like { Component } from "react", In this we are instructing to get the "{ items }" from the "props" array */
//   console.log()
//   return (
//     <div onClick={() => alert("You have click "+items.id+" element")}>
//       <h3>{items.title}</h3>
//       <div>{items.feed}</div>
//     </div>
//   );
// };

const NewsItem = props => {
  console.log(props);

  let news_item = css({
    padding: "20px",
    boxSizing: "border-box",
    borderBottom:"1px solid grey",
    ":hover": {
      color: "red"
    },
    "@media(max-width: 500px)": {
      color: "blue"
    }
  });

  let item_grey = css({
    background: "lightgrey"
  });
  return (
    <div
    //   {...news_item}                     // This will grab all the properties inside the "news_item" element and put them inside here 
    //   {...item_grey}
    className={`${news_item} ${item_grey}`} // This is called Template Strings
      onClick={() => alert("You have click " + props.items.id + " element")}
    >
      <h3>{props.items.title}</h3>
      <div>{props.items.feed}</div>
    </div>
  );
};

export default NewsItem;
