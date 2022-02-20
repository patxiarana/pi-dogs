import axios from 'axios';



export  function  getAllDogs() {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_HOME",
        payload: json.data,
      });
   
    };
     
  }


  export function getDetail(id) {
  return async function ( dispatch) {
  var json = await axios.get("http://localhost:3001/dogs/"+ id)
   return dispatch({
  type: "GET_DETAIL",
  payload: json.data,
  });
};
}


export function CreateDog(Input){
  return async function (dispatch){
   try{  
    var json = await axios.post("http://localhost:3001/dog/",Input);
   return dispatch({
type: "CREATE_DOG",
payload: json.data
})
}catch (err){
  return err
    }
}
}

export function GetTemperaments(){
  return async function (dispatch){
  try{
    var json = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: "GET_TEMPERAMENT",
      payload: json.data
    })
   }catch(e){
   return e 
}
}
}


export function SearchName(name){
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dogs/name?name="+ name);
    return dispatch({
      type: "GET_NAME",
      payload: json.data,
    });
  };
}

export function OrderAlfabetico(payload){
  return({
        type: "ORDEN_ALFABETICO",
        payload
      })
  
  }


  
export function OrderPeso(payload){


  return({
  type: "ORDEN_PESO",
  payload


  })

}

export function filtradoDeTemps(payload){

  return({
  type:"FILTRADO_TEMPS",
  payload
  })
  } 

  
export function Vaciamiento(id){

  return ({
    type:"VACIAMIENTO",
    payload: id,
  })
  }