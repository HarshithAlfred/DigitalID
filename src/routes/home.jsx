import React from "react"
import { useNavigate } from "react-router-dom";
import "./home.css"
function home()
{    
const nav = useNavigate();  
 const route=()=>{
  nav('/login');
 }
return(
<>
<div class="center-div">
    <span onClick={route}> student login</span> 
    <span onClick={route}> Faculty login </span> <b/>
   <span onClick={route}> Admin login </span>
</div>
</>)
}
export default home;