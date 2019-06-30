import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(data => {
        // console.log(data);
        return <PostContainer key={data.id} data={data} />;
      })}
    </div>
  );
}

export default App;
