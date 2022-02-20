import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GetTemperaments } from "../actions";
import { useDispatch } from "react-redux";
import { CreateDog } from "../actions";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../componentes/styles/CrearRaza.css"

let validate = (input) =>{
  let error = {}
  var ExpRegSoloLetras="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"; 
  

   if(input.name.match(ExpRegSoloLetras) === null ){
   error.name = "solo se admiten letras como valores para el nombre";
 } 
if(!input.height){
  error.height = "no se admiten campos vacios en height"
}
if(!input.weight.length){
  error.weight= "no se admiten campos vacios en weight"
}
if(!input.life_span){
  error.life_span = "no se admiten campos vacios en life_span"
}
return error;
    }
const CrateDogs = () =>{


const dispatch = useDispatch();
const TempDog = useSelector((state) => state.temperaments)
let [input, setInput] = useState({name:'', height:'', weight:'', life_span:'', temperamento:''})
let [error, setErrors] = useState({});


useEffect(() =>{
dispatch(GetTemperaments())
},[])

let handelselect = (e) => {
 setInput({
      ...input,
      temperamento:[...input.temperamento,e.target.value]
      })
     
    }
    let handelchange = (e) => {
        e.preventDefault()
        setInput( {...input, [e.target.name]: e.target.value})
        setErrors(validate(
          {...input, [e.target.name]: e.target.value}))
    }
    let handelsubmit = (e) => {
    e.preventDefault(e)
    if(!input.name) return alert('no se admiten campos vacios en name')
    if(Object.keys(error).length !== 0){
      return alert(Object.values(error))   
    }
    if(!input.temperamento){
      return alert("no se admiten campos vacios en temperamentos")
    }
    dispatch(CreateDog(input))
    alert("raza creada")
    }



return (

 <div className="create">
<form onSubmit={handelsubmit} className="formulario">
  <label className="names">Name</label>
  <input name = "name" value={input.name} onChange={handelchange}/>  
   <label className="names">height</label>
  <input name="height" value = {input.height}  onChange={handelchange}/>
  <label className="names">weight</label>
  <input name="weight" value = {input.weight}  onChange={handelchange}/>
   <label className="names">life_span</label>
  <input name="life_span" value = {input.life_span}  onChange={handelchange}/>
   <label className="names">temperamentos</label>
  <div>
    <select onChange ={handelselect}>
     {
     TempDog?.map(t =>(
            <option value = {t.name}>{t.name}</option>    
      ))
      }
   </select>
    <ul><li className="Temperamento">{input.temperamento + " , "}</li></ul>                   
   </div>
      <button type="submit">Create</button>
     </form>
         <NavLink to={"/Home"}>
       <button className="btnHome">HOME</button>
        </NavLink>
     
     </div>

     
)
}

export default CrateDogs;