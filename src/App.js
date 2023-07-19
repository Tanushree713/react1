import React from 'react';
import Person from './Person' ;
import Button from './Button';
import Header from './Header';
import List from './List';
import DynamicGreets from './DynamicGreeting';
import {Add , Sub ,Mul ,Div} from './Calculator';
function App() {

   function clickMe(){
     console.log("HandleME!!") ;
   }


   
  return (
    <>
        <Person name="Tanu" age="20" />
        <Button text="Click-Me" onClick={clickMe}/>
        <Header title ="Hi!! Tanushree here."/>
        <List items={["Home" ,"About" , "Contact"]} />
        <DynamicGreets  />
        <Add a="10" b="20"/>
        <Sub a="10" b="20"/>
        <Mul a="10" b="20"/>
        <Div a="1" b="3"/>
    </>
  );
}

export default App;
