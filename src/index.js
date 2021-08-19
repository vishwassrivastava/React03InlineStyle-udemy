import React from "react";
import ReactDOM from "react-dom";


const CustomStyle= {

  color:"red",
  fontSize:"20px",
  border:"1px solid black"

};
CustomStyle.color="blue";

ReactDOM.render(

<h1 style={CustomStyle}>Hello World!</h1>,
document.getElementById("root"));
