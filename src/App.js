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
        <NewsList newsData={this.state.news}/>
      </div>
    );
  }
}

export default App;
