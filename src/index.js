import React from "react";
import ReactDom from "react-dom";
import Search from "./Search";
import "./App.css";

function App() {
return (
  <div className="App">
    <h1>Weather App</h1>
    <Search />
    <div>
    <footer>
    Coded by <a href="https://github.com/OksanaYur/React-weather-forecast-app" target="_blank">
    OksanaYuriychuk</a>
  </footer></div>
  </div>
  
);
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
