import { bindActionCreators } from "redux";

const initialState = {
  dogs:[],
  detail:[],
  temperaments:[],
  dogsFilter:[],
  dogsOrder:[],
  filterDT:[]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) { 
        case "GET_HOME":
            return {
              ...state,
              dogs: action.payload,
              dogsFilter:action.payload,
              dogsOrder:action.payload,
              filterDT:action.payload,
            };
            case "GET_DETAIL":
              return {
                ...state,
                detail:action.payload,
              }

              case "CREATE_DOG":
                return {...state,dogs : state.dogs.concat(action.payload)}
        
            case "GET_TEMPERAMENT":
              return {
                ...state,
                temperaments:action.payload
              }
              case "GET_NAME":
                return{
                    ...state,
                    dogs:action.payload,
        
                };


                case   "ORDEN_ALFABETICO":
                  let AUXorderAL = []
                  let orderAL = action.payload === 'ascAL' ?
                  AUXorderAL = state.dogsOrder.sort(function(a,b){
                      if(a.name > b.name){
                          return 1;
                      }
                      if(b.name > a.name){
                          return -1
                      }
                      return 0;
                  })
                  :
                  AUXorderAL = state.dogsOrder.sort(function(a,b){
                    if(a.name > b.name){
                     return -1
                      } 
                    if(b.name > a.name){
                        return 1
                    }
                       return 0
                      
                  })
                  return {
                    ...state,
                    dogs:AUXorderAL
                    }              

                  case "ORDEN_PESO":
                    let AUXorderPe = []
                   let orderFU = action.payload === 'ascPe' ?
                   AUXorderPe = state.dogs.sort(function(a,b){
                        if(a.weight > b.weight){
                         return -1
                          } 
                        if(b.weight > a.weight){
                            return 1
                        }
                           return 0
                          
                      })
                     :
                     AUXorderPe = state.dogs.sort(function(a,b){
                    if(a.weight > b.weight){
                        return 1;
                    }
                    if(b.weight > a.weight){
                        return -1
                    }
                    return 0;
                })
                return {
                  ...state,
                  dogs:AUXorderPe 
                  }      
                

              case "FILTRADO_TEMPS":
                  const DogsAll =  state.dogsFilter;
                    
                   const eStadoArtificial = [] 
                    DogsAll.map( e => 
                      eStadoArtificial.push(
                      { 
                        id: e.id,
                      name: e.name,
                     image: e.image,
                    temperamento2:e.Temperamentos ? e.Temperamentos.map(e => e.name) : e.temperamento1 ? e.temperamento1.split(',') : null ,
                    weight: e.weight
                      }))
                 
                  
                        
                   const filterDog =  action.payload ===  "todos" ?  eStadoArtificial : eStadoArtificial.filter(e => e.temperamento2?.includes(action.payload))
                     return {
                   ...state,
                   dogs:filterDog   
               
               }    
               case "VACIAMIENTO":
                if(state.detail.length > 0){   
                if(state.detail[0].id !== action.payload){
                  return { ...state,
                    detail:[],
                };
            }
            }       
         
            case  "FILTER_DT":
              const filtradoDT = state.filterDT
            const filterData = action.payload === "Existente" ?  filtradoDT.filter(e => e.id < 265) : action.payload === "Creado" ? filtradoDT.filter(e => e.id.length > 3) : filtradoDT
                      
              return { ...state,
                dogs:filterData,
            };
          

            default: return {...state}
        }
      
    }


        export default rootReducer;