import React from "react";
import { NavLink } from "react-router-dom";
import "../componentes/styles/HomeCard.css"
import '../componentes/styles/Detail.css'

const HomeCard = (props) => {
 
return (
        <div className="contenedor">
       <p className="texto">name:{props.name}</p>
       <p className="texto">temperamento:{props.temperamento}</p>
      <p className="texto">peso:{props.weight + "kg"}</p>
      <img src={props.image}  alt= "imagen pokemon" className="imgHome" />
      <NavLink to = {"/dogs/"+ props.id} className='btnDetail'>Detail</NavLink>

      </div>
    );
};


export default HomeCard;

