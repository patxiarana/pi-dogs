const e = require("express")
const axios =require('axios')
const {API_KEY} = process.env;
const { Temperamento } = require("../db")

const allTemperaments = async() => {
 const PedidoTemp = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
const DogTemp=   PedidoTemp.data

dogAux = []
DogTemp.map( e =>
dogAux.push({
    name: e.temperament
})
)
const TempSeparate = dogAux.map(e => e.name)
const tempString = TempSeparate.toString()
const Tempsplit = tempString.split(',')


const result = Tempsplit.reduce((acc,item)=>{
    if(!acc.includes(item)){
        acc.push(item);
    }
    return acc;
  },[])

  let allDogsTemperament =  result.map(ty =>{
    Temperamento.findOrCreate({
   where: { name: ty },
  });
})
allDogsTemperament = await Temperamento.findAll()


return allDogsTemperament



}



module.exports = {allTemperaments}


