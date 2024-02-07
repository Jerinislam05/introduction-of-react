import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {

  const books = [
    {id: 1, name: "physics", price: 120},
    {id: 2, name: "english", price: 100},
    {id: 3, name: "math", price: 130},
    {id: 4, name: "chemistry", price: 150}
  ]


  const actors = ['sakib', 'raj', 'jasim', 'razzak']

  const singers = [
    {id: 1, name: 'mahfujur', age: 68},
    {id: 2, name: 'Eva rahman', age: 38},
    {id: 3, name: 'shuvro dev', age: 60},
    {id: 4, name: 'pritom', age: 28},
  ]

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo 
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Explore Core Concept" 
        isDone={false}></Todo>
      <Todo 
        task="Try JSX" 
        isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="60000"></Device>
      <Device name="mobile" price="200000"></Device>
      <Device name="desktop" price="80000"></Device>
      <Person></Person>
      <Student grade="7" score="98"></Student>
      <Student grade={12} score="85"></Student>
       <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 30;
  const money = 20;
  const person = { name: "john", age: 12 };
  return (
    <h2>
      I am {person.name} doing coding with age : {age + money}
    </h2>
  );
}

const { grade, score } = { grade: "7", score: "98" };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h4>debo devo</h4>
      <p>coding:</p>
    </div>
  );
}
export default App;
