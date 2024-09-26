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

  componentDidMount() {
    // this.setState({ posts: data });
  }

  handleSearch = eve => {
    const posts = this.state.posts.filter(post => {
      if (posts.username.includes(eve.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} />
        {dummyData.map(data => {
          // console.log(data);
          return (
            <PostContainer
              key={uuid()}
              data={data}
              addComment={this.addComment}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
