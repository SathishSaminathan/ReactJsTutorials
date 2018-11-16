import React from "react";

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
    console.log(props)
    return (
        <div onClick={() => alert("You have click " + props.items.id + " element")}>
            <h3>{props.items.title}</h3>
            <div>{props.items.feed}</div>
        </div>
    );
};

export default NewsItem;
