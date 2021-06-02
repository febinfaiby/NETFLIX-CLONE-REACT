import React from "react";



function Hero(){
  
  let stylebg={
    marginTop:"0",
    marginLeft:"0",
    paddingBottom:"0px",
   // position:"absolute",
  }
   let banner= {
     // position:"absolute",
    marginLeft: "40px",
     marginTop: "80px",
  
  }
  let bg={
    width:"136%",
    height:"930px",
    marginTop:"-8px",
    marginLeft:"-8px",
    marginBottom:"-8px",
    paddingBottom:"0px",
   // position:"relative"
   // 
  }
 
  return(
    <div style={stylebg}>
  
<img style={bg} src="./Images/peakyblinders_50758135012_o__01.jpg"/>

 
    </div>
    )
}
export default Hero;
