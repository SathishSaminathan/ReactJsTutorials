import React, { Component } from "react";

import "./App.css";

import Header from "./components/header";
import NewsList from "./components/news_list";
import JSON from "./db.json";

class App extends Component {

  state={
    news:JSON
  }

  render() {
    console.log(this.state.news)
    return (
      <div>
        <Header/>
        <NewsList newsData={this.state.news}>
          <h3>Welcome to the NewsFeed!!!</h3> {/**This will be passed as the children to the NewsList Component and we can assess them by using the "props.children" */}
        </NewsList>
      </div>
    );
  }
}

export default App;
