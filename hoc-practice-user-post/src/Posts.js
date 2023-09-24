import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ResourceHoc from "./ResourceHoc";

const Posts = ({ data }) => {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("posts", res);
  //         setPosts(res);
  //       });
  //   }, []);
  console.log("dl", data.length);
  return <div className="App">{data}</div>;
};

const PostsComponent = ResourceHoc(Posts, "Posts", "posts", "title");
export default PostsComponent;
