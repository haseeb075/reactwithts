import React from "react";

import "./App.css";

// Basic Props
import Greet from "./components/BasicProps/Greet";
import Header from "./components/BasicProps/Header";

// Advanced Props
import Oscar from "./components/AdvancedProps/Oscar";
import Heading from "./components/AdvancedProps/Heading";
import Person from "./components/AdvancedProps/Person";
import Status from "./components/AdvancedProps/Status";
import PersonList from "./components/AdvancedProps/PersonList";

// Event Props
import Button from "./components/EventProps/Button";
import Input from "./components/EventProps/Input";

// Style Props



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
      <Status status='error' />
      {/* If we pass this status we will not get error. we use a union of string literals */}
      {/* <Status status='poipop' /> */}

      {/* CHILDREN PROPS : where your component accept all props from another component*/}
      {/* One scenario of children props */}
        <Heading>Placeholder text </Heading>
      {/* 2nd screnario of children props */}
      <Oscar>
        <Heading>
        Oscar goes to decaprio

        </Heading>
      </Oscar>

      {/* OPTIONAL TYPE : Component type doesnt have to be passed*/}
      {/* If messagecount has been fixed so we have to tell Greet that is optional so we put ? into the prop type. also we check if props 
      of messageCount passed then show that otherwise show zero
       */}
      <Greet name="Vishwas" isLoggedIn={true} />

      {/* EVENT PROPS */}
{/* For Buttons */}

     {/* One Variation: When click handler doesnt need parameters and return value */}
     {/* ===> <Button handleClick={() => {
        console.log('Button Clicked')
      }} /> */}
    {/* 2nd Variation: When you need the click handler to passed into click handler */}
    <Button handleClick2={(event, id) => {
        console.log('Button Clicked', event, id)
      }} />
    
      {/* For INPUTS */}
        <Input value ="" handleChange={event => console.log("event value changes", event)}/>
  
    </div>

  );
}

export default App;
