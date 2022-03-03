import React from "react";

import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Person from "./components/Person";
import PersonList from "./components/PersonList";


function App() {
  // Passing an Object Props
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  // Passing an Array of Objects Props
  const nameList = [{ first: "Bruce", last: "Wyne" }, { first: "Clark", last: "Kent" }, { first: "Princess", last: "Wyne" }];

  return (
    <div className="App">
      <Header title="hello world" color="red" />
      <Greet name="Haseeb" messageCount={2} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
