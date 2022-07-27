const axios = require("axios");
const { Router } = require("express");
const {API_KEY} = process.env;
const { Dog, Temperamento } = require("../db")

const GetDogs = async () => {
try{   
const PedidoApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
const DogData =  PedidoApi.data
console.log(DogData)
const Dogformate = [] 
DogData.map( D => 
Dogformate.push(
 { id: D.id,
  name: D.name,
  weight: D.weight.metric,
  height: D.height.metric,
 life_span: D.life_span,
 image: D.image.url,
 temperamento1:D.temperament,
}
))
//return Dogformate
return Dogformate
}catch(e){
console.log(e)
}
}



const GetDB = async () => {
try{
   const dogDB = await Dog.findAll({
          include: {
            model: Temperamento,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        });
       return dogDB;
  
}catch(e){
console.log(e)
}
}

const allDogs = async () =>{
 
    const DogApi = await GetDogs()
  const DogDB = await GetDB()
     const Dogall = [...DogApi,...DogDB]
    
  
   return Dogall;
   
}



module.exports = {allDogs}


