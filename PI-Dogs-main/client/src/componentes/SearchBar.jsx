import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchName } from "../actions";
import "../componentes/styles/SearchBar.css"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
  

    
    function handleInputChange(e) {
      e.preventDefault();
      setName(e.target.value);
      //console.log(name);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(SearchName(name));
    }
  
    return (
      <div className="searchBar">
        <input
          className="barra"
          type="text"
          placeholder="buscar..."
          onChange={(e) => handleInputChange(e)}
        />
        <br />
        <div>
        <button type="submit" onClick={(e) => handleSubmit(e)} className="btnSearch">
          BUSCAR
        </button>
        </div>
      </div>
    );
  }

