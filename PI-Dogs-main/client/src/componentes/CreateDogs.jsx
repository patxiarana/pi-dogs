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
if(!input.height_min){
  error.height_min = "no se admiten campos vacios en height"
}
if(!input.height_max){
  error.height_max = "no se admiten campos vacios en height"
}
if(input.height_min > input.height_max){
  error.height = "el height min no pude ser mayor que el max"
}
if(!input.weight_min){
  error.weight_min= "no se admiten campos vacios en weight"
}
if(!input.weight_max){
  error.weight_max = "no se admiten campos vacios en weight"
}
if(input.weight_min > input.weight_max){
  error.weight = "el weigth min no pude ser mayor que el max"
}

if(!input.life_span){
  error.life_span = "no se admiten campos vacios en life_span"
}
return error;
    }


const  CrateDogs = () =>{


const dispatch = useDispatch();
const TempDog = useSelector((state) => state.temperaments)
let [input, setInput] = useState({name:'',height_min:'',height_max:'', weight_min:'',weight_max:'', life_span:'', temperamento:''})
let [error, setErrors] = useState({});


useEffect(() =>{
dispatch(GetTemperaments())
},[])

let handelselect = (e) => {
 setInput({
      ...input,
      temperamento:[...input.temperamento,e.target.value].reduce((acc,item) => {
        if(!acc.includes(item)){
        acc.push(item)
        }
        return acc;
      },[])
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

let buttondelete = (e) =>{
  setInput({
    ...input,
    temperamento:''
    })

}

return (

 <div className="create">
<form onSubmit={handelsubmit} className="formulario">
  <label className="names">Name</label>
  <input name = "name"value={input.name} onChange={handelchange}/>  
   <label className="names" >height_min</label>
  <input name="height_min" value = {input.height_min}  onChange={handelchange}/>
  <label className="names">height_max</label>
  <input name="height_max" value = {input.height_max}  onChange={handelchange}/>
 <label className="names">weight_min</label>
  <input name="weight_min" value = {input.weight_min}  onChange={handelchange}/>
  <label className="names">weight_max</label>
  <input name="weight_max" value = {input.weight_max}  onChange={handelchange}/>
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
    <ul><li className="Temperamento">{input.temperamento + " , " }<button onClick={buttondelete} type = 'reset'>x</button></li></ul>                   
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