import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ResourceHoc from "./ResourceHoc";

const Users = ({ data }) => {
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("users", res);
  //         setUsers(res);
  //       });
  //   }, []);
  return <div className="App">{data}</div>;
};

const UsersComponent = ResourceHoc(Users, "Users", "users", "name");
export default UsersComponent;
