import React, { Component } from "react";

import "./App.css";

import Header from "./components/header";
import NewsList from "./components/news_list";
import JSON from "./db.json";

class App extends Component {
  state = {
    news: JSON,
    filtered: [],
    keywordFound: true
  };

  getKeyword = e => {
    let keyword = e.target.value;
    console.log(e.target.value);
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keyword) > -1;
    });
    console.log("Filtered news:", filtered.length);
    if (filtered.length > 0) {
      this.setState({
        filtered,
        keywordFound: true
      });
    } else {
      this.setState({
        keywordFound: false
      });
    }
  };

  render() {
    let filteredNews = this.state.filtered;
    let allNews = this.state.news;

    return (
      <div>
        <Header keyword={this.getKeyword} found={this.state.keywordFound} />{" "}
        {/**  keyword={this.getKeyword} sending the function as props to the Header Component and when the event in the Header Component get called then its calls this "getKeyword" function*/}
        <NewsList newsData={filteredNews.length === 0 ? allNews : filteredNews}>
          <h3>Welcome to the NewsFeed!!!</h3>{" "}
          {/**This will be passed as the children to the NewsList Component and we can assess them by using the "props.children" */}
        </NewsList>
      </div>
    );
  }
}

export default App;
