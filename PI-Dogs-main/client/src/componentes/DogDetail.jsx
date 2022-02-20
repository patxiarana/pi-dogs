import React from "react" 
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getDetail }  from '../actions/index'
import  DetailCard from '../componentes/CardDetail'
import Logo from '../componentes/img/creado.jpg'
import { Vaciamiento } from "../actions/index"

import '../componentes/styles/Detail.css'



const DogDetail = function  (props) {

const dispatch = useDispatch()
 const DetailDog = useSelector((state) => state.detail)
 const  params  = props.match.params.id
 
 console.log(params)
 
 useEffect(() => {
dispatch(getDetail(params))
dispatch( Vaciamiento(params))
},[])

return (
  <React.StrictMode>
<div className="cuerpo">
<div className='CardSpace'>
        {DetailDog?.map((e) => (
          <DetailCard 
        id = {e.id}
        key= {e.id}
        name ={e.name}
       temperamento={ e.Temperamentos ? e.Temperamentos.map(e => e.name) : e.temperamento1 ?  e.temperamento1  : e.temperamento2 }
       image = {e.image ? e.image : Logo}
       weight = {e.weight}
       life_span = {e.life_span}
       height = {e.height}
        />
        ))}
</div>
</div>
 </React.StrictMode>
)


}



export default DogDetail ;