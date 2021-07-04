import React from 'react';
import './App.css';
import Hello from './Hello';

const App = ({name}) =><div><Hello name="Anushah"></Hello></div> 
export default App;


//all the properties will be coming in this props object
//string/text is always in "" but expression in JS is any calculation/number like {12*2} or {12}
/*function App(props) {//props is an argument, obvio it can be named differently as it is a var. we just go with props as it is a standard
 
  return (
    <div> Heya from {props.name} age {props.age - 10}</div>//here we displayed the property taken from App.js, just like any other programming language
  );
}*/

/*function App({name, age}) {
  return (
    <div> Heya from {name} age {age - 10}</div>//here we displayed the property taken from App.js, just like any other programming language
  );
}*/

//destructuring the properties directly and not using an object which makes it easier.

//Now there are different ways of writing a function so the simpler the better
/*const App = ({name}) =><div>Hello {name}
<br/> <Hello firstName={name}></Hello></div> 
export default App;*/
