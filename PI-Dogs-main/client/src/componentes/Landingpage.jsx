import React from "react";
import { NavLink } from "react-router-dom";
import "../componentes/styles/landignpage.css"

const landingPage = () => {

return(

<React.StrictMode>
 <div className='home'>
 <NavLink to={"/Home"}>
  <button className="button">Home</button> 
   </NavLink>
</div>
<div className="img">
<h1 className="henrydogs">HENRY DOGS</h1> 
</div>
</React.StrictMode>

)
};

export default landingPage;
