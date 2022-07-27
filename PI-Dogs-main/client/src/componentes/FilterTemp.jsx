import React from "react";
import { filtradoDeTemps } from "../actions/index";
import { GetTemperaments } from "../actions/index";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import "../componentes/styles/filterTemp.css"


const FilterTemps = () => {
const dispatch = useDispatch()
const allTemperaments = useSelector((state) => state.temperaments)

useEffect(() =>{
 dispatch(GetTemperaments())
},[])   
   
const HandelfilterTemp = (e) => {
    dispatch(filtradoDeTemps(e.target.value))
  }
   


return (

 
    <React.StrictMode>
      <div className="bodyfilters">
    <label className="namesfilters">filtrar Temperamentos</label>
    <select onChange ={HandelfilterTemp}>
    <option value = "todos">FILTRAR</option>
    <option value = "todos">todos</option>
    {
    allTemperaments?.map(t =>(
           <option value = {t.name}>{t.name}</option>    
     ))
     }
  </select>
  </div>
  </React.StrictMode>
)
}



export default FilterTemps;