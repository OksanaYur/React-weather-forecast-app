import React from "react";
import ReactDom from "react-dom";
import Search from "./Search";
import "./App.css";

function App() {
return (
  <div className="App">
    <h1>Weather App</h1>
    <Search />
  </div>
);
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
