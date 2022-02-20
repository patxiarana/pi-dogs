import React from "react";
import { NavLink } from "react-router-dom";
import '../componentes/styles/Detail.css'


const DetailCard = (props) => {
 
    return (
            <div className="CardDetail">
           <p className="texto">name:{props.name}</p>
           <p className="texto">temperamento:{props.temperamento}</p>
          <p className="texto">peso:{props.weight + "kg"}</p>
          <p className="texto">altura:{props.height + "mts"}</p>
          <p className="texto">esperanza de vida:{props.life_span} </p>
          <img src={props.image}  alt= "imagen dog" className="imgHome" />
          <NavLink to="/Home">
           <button className="button">Home</button>
            </NavLink>
          </div>
        );
    };
    
    
    export default  DetailCard ;
    