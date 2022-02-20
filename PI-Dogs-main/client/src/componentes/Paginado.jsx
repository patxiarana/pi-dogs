import  React  from 'react';
import "../componentes/styles/paginado.css"
export default function PaginadoComp ({DogPorPagina,allDogs,paginado}) {
const NumDpag = [];

for(let i = 0 ; i<= Math.ceil(allDogs/DogPorPagina); i++){
    NumDpag.push(i+1)

}
return (
    <nav>
     <ul className='paginado'>
         {  NumDpag &&
          NumDpag.map(Numero => (
             <li className='numero'>
           <a onClick={() => paginado(Numero)} className='numero1' >{Numero}</a>
           </li> 
          ))}
     </ul>


    </nav>

)

}