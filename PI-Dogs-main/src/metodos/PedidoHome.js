 const axios = require("axios");
const { Router } = require("express");
const {API_KEY} = process.env;
const { Dog, Temperamento } = require("../db")

const GetDogsHome = async () => {
try{   
const PedidoHome = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
const DogDataHome =  PedidoHome.data

const DogformateHome = [] 
DogDataHome.map( D => 
DogformateHome.push(
 { id: D.id,
  name: D.name,
 image: D.image.url,
 temperamento1:D.temperament,
 weight: D.weight.metric
}
))
return DogformateHome
}catch(e){
console.log(e)
}
}

const GetDBhome = async () => {
  try{
    const DataBase = await Dog.findAll({
        attributes:["name" , "id", "image", "weight"] ,
           include: {
          model:Temperamento ,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

return DataBase
    }catch(e){

    return "aca esta el problema"
    }    




} 
    

const AllHome = async () =>{

const allHomeApi = await GetDogsHome()
 
const allHomeData = await GetDBhome()

const AllHomeDog = [...allHomeApi,...allHomeData]

return AllHomeDog

}



module.exports = {AllHome} 

