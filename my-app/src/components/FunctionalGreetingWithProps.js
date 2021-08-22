import React from "react";

// function FunctionalGreeting(){
//     return <h1>Hello from React!</h1>
// }

/** FunctionalGreeting as arrow function */
const FunctionalGreetingWithProps = (props) => <h1>Hello {props.name}</h1>

export default FunctionalGreetingWithProps