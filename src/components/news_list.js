import React from "react";

import NewsItem from "./news_list_items";

const NewsList = props => {   /** stateless components(function based) has only the props, the values we are passing from the parent component can retrieve by props */
    const news = props.newsData.map((item) => {
    return (
      <NewsItem key={item.id} items={item}/> /** passing data to the child component */
    );
  });
  return <div>{news}</div>;
};

export default NewsList;
