import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

let ResourceHoc, HOC;
export default ResourceHoc = (Component, title, requestedResource, element) => {
  return (HOC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/" + requestedResource)
        .then((res) => res.json())
        .then((res) => {
          console.log("data ", requestedResource, res);
          setData(res);
        });
    }, []);

    const parsedData = (
      <>
        <h1>{title}</h1>
        {data.slice(0, 10).map((item, index) => {
          return <h3>{index + 1 + ". " + item[element]}</h3>;
        })}
      </>
    );

    return <Component data={parsedData} />;
  });
};
