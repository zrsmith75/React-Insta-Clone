import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import uuid from "uuid";
import dummyData from "./dummy-data";
import "./App.css";

class App extends React.Component {
  state = {
    posts: [],
    filteredPosts: []
  };
  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(data => {
          // console.log(data);
          return <PostContainer key={uuid()} data={data} />;
        })}
      </div>
    );
  }
}
export default App;
