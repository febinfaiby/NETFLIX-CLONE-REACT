import React from 'react';

function Header() {
   
   //const(state,setState)=usestate[]
  
  
const style1={
  position: "fixed",
  marginLeft: "20 px",
  width: "80 px",
  height:"70px",
  
  
}
let style={
  position: "fixed",
    marginTop:"0px",
    marginLeft:"0px",
    width: "119%",
    height: "30px",
    padding: "40px",
    display:" flex",
    justifyContent:"spaceBetween",
   // backgroundColor:"black",
    color:"white",
    alignItems:"center",
  position:"absolute",
   
}

let avatar={
  position: "fixed",
  marginLeft: "92%",
  width: "10 px",
  height:"25px",
}
let stylea={
  marginLeft:"530px",
  color:"white",
  backgroundColor:"white",
}
let style2={
  display:"flex",
  color:"white",
  textDecoration:"none",
  marginLeft:"30px",
  fontWeight:"bold",
  fontSize:"20px"
  
}
let style3={
  marginLeft:"200px",
  display:"flex",
  
}

let style50={
backgroundColor:"red",//rgba(0, 0, 0, 0.5)",
  color:"white",
  alignItems:"center",
  border:"none",
  borderRadius:"3px",
  padding:"10px 34px 10px 34px",
  
  margin:"10px",
  fontWeight:"bold",
  textShadow:"2px 2px black",
  fontSize:"22px"
}
let style501={
 backgroundColor: "rgba(0, 0, 0, 0.5)",
 color: "white",
    alignItems: "center",
    border: "none",
    borderRadius: "4px",
    padding: "10px 34px 10px 34px",
     margin: "10px",
    fontWeight: "bold",
    textShadow: "2px 2px black",
    fontSize: "22px",
}
let banner={
  marginLeft:"30px",
  marginTop:"500px",
  color:"white",
  fontWeight:"bold",
  position:"absolute"
}
let head={
  fontSize:"bold",
textShadow:"2px 2px black",
fontSize:"46px",
fontFamily:"Helvetica Neue Condensed",
marginBottom:"7px",
color:"#D3D3D3"
}
let sta={
  color:"#90EE90",
  marginTop:"0px",
  fontSize:"22px"
}
let abs={
  color:"white",
  fontSize:"bold",
  marginLeft:"10px",
}
  return (
    <div style={style}>
    
  <div style={banner}>
      <h1 style={head}><legend>PEAKY BLINDERS</legend></h1> 
      <h2 style={sta}>98% Match<span style={abs}>2018 Season1</span></h2>
      
      <button style={style50}
      > 
      PLAY </button>   
      <button style={style501}
      > MY LIST</button>
      <p style={{maxWidth:"365px"}}>A notorious gang in 1919 Birmingham,<br/>England, is led by the fierce Tommy <br/> shelby,a crime boss set on moving<br/> up in the world no matter the cost.<br/> Watch all you want.</p>
    </div>
        <img style={style1} src="./Images/Logo.jpeg"/>  
 <div style={style3}>
  <a style={style2} href="">Home</a>
   <a style={style2} href="">TV Shows</a>
    <a style={style2} href="">Movies</a>
     <a style={style2} href="">Latest</a>
    </div>
 
   <img style={avatar}src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"/>
   <a style={stylea}href="">🔔</a>
   
  
</div>
  )
}
export default Header;