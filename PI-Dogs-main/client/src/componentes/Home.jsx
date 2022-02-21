import React from "react";
import { getAllDogs }  from '../actions/index'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import HomeCard from "./CardHome";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import PaginadoComp from "./Paginado";
import { useState } from "react";
import { OrderAlfabetico } from "../actions/index";
import { OrderPeso } from "../actions/index";
import FilterTemps from "./FilterTemp";
import Logo from '../componentes/img/creado.jpg'
import { FilterDT } from "../actions/index";
import "../componentes/styles/Home.css"

const  Home = () => {

  const allDogs = useSelector((state) => state.dogs)
  const [orden, setOrden] = useState('')
  const [PaginaActual, setPaginaActual] = useState(1)
  const [DogPorPagina, setDogPorPagina] = useState(8)
  const indiceUltimoDog = PaginaActual * DogPorPagina ;
  const indicePrimerDog = indiceUltimoDog - DogPorPagina;
  const DogActual = allDogs.slice(indicePrimerDog,indiceUltimoDog)


  

  const paginado = ( NumeroPagina ) =>{
    setPaginaActual(NumeroPagina)
}



const dispatch = useDispatch();
useEffect(() =>{
dispatch(getAllDogs())
},[])

const HandelAlfabetico = (e) =>{
  dispatch(OrderAlfabetico(e.target.value))
  setPaginaActual(1)
  setOrden(`ordenado ${e.target.value}`)
 }
 const HandelOrdenPeso = (e) =>{
  dispatch(OrderPeso(e.target.value))
  setPaginaActual(1)
  setOrden(`ordenado ${e.target.value}`)
  
 }
 const HandelCreatDT = (e) =>{
dispatch(FilterDT(e.target.value))
}




return (
    <React.StrictMode>

<div className="Body">
<FilterTemps/>
<PaginadoComp className= 'paginado' 
    DogPorPagina={DogPorPagina}
     allDogs={allDogs.length}
    paginado={paginado}
    />

<SearchBar className='searchBar'/>


       <div className="select">
       <select onChange={(e) => HandelAlfabetico(e)}className='select_value'>
       <option value = 'ascAL'>AscendenteAL</option> 
       <option value ='descAL'>DescendenteAL</option>
      </select>
      </div>
      <div className="select">
      <select onChange={(e) =>  HandelOrdenPeso(e)} className='select_value'>
       <option value = 'ascPe'>AscendentePeso</option> 
       <option value ='descPe'>DescendentePeso</option>
      </select>
     </div>
     <div className="select">
     <select onChange={(e) =>  HandelCreatDT(e)} className='select_value'>
     <option value = "todos">todos</option> 
       <option value = "Creado">Creado</option> 
       <option value ="Existente">Existente</option>
      </select>
      </div>



     <NavLink to = {"/Home/create"} className='crear-raza'>
     <button className='btnreate'>crearRaza</button>
  </NavLink>
    <div className='Dog_map'>
     {DogActual?.map((e) => (

             <HomeCard  
             id = {e.id}
             key= {e.id}
             name ={e.name}
            temperamento={ e.Temperamentos ? e.Temperamentos.map(e => e.name) : e.temperamento1 ? e.temperamento1 :  e.temperamento2}
            image = {e.image ? e.image : Logo }
            weight = {e.weight}
             />
             
             ))}
  </div>
  </div>
  </React.StrictMode>
)

}


export default Home; 