import React  from "react";
import ReactDOM from "react-dom"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Row from"./Components/Row"
//import Style from "./Components/Style"
function App () {

 
 document.body.style = 'background: black;';
 
  return(
   <div>
   <Header/>
   <Hero/>
   <Row/>
   </div> 
    
    );
};
export default App;