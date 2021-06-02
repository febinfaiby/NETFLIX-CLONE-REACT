import React from "react";

function Row (){
 
  let rawcard={
   width:"136%",
   marginLeft:"-8px",
  height:"1000px",
  backgroundColor:"black",
  marginTop:"0",
 // position:"absolute",
  
    
 }
 let cardheader={
   fontSize:"36px",
   color:"white",
   marginLeft:"30px",
   marginTop:"60px",
   fontWeight:"bold"
  }
  let imgcard={
    display:"flex",
   overflowX:"scroll",
   overflowY:"hidden"
  }
  let img={
   width:"200px",
   marginLeft:"30px",
 }
  return(
   <div style={rawcard}>
   
   <h2 style={cardheader} >Netflix Originals</h2>
   <div style={imgcard}>
   <img style={img}src="./Images/Moviecard.jpg"/>
   
      <img style={img}src="./Images/Moviecard.jpg"/>
      
         <img style={img}src="./Images/Moviecard.jpg"/>
       
            <img style={img}src="./Images/Moviecard.jpg"/>
             
               <img style={img}src="./Images/Moviecard.jpg"/>
               
           <img style={img}src="./Images/Moviecard.jpg"/><img style={img}src="./Images/Moviecard.jpg"/><img style={img}src="./Images/Moviecard.jpg"/>
           <img style={img}src="./Images/Moviecard.jpg"/>
           <img style={img}src="./Images/Moviecard.jpg"/><img style={img}src="./Images/Moviecard.jpg"/>
               
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               <img style={img}src="./Images/Moviecard.jpg"/>
               
               
   </div>
   
   
   
   
   </div>
    )
}
export default Row;