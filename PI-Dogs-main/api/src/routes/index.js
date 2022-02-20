const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {AllHome}  = require('../metodos/PedidoHome')
 const {allTemperaments} = require('../metodos/createTemperamentos')

const {allDogs} = require('../metodos/pedidoApi')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get( '/dogs',async (req,res) =>  {
try {
const DogHome = await AllHome()
res.json(DogHome)
}catch(e){
res.status(404)

}})

router.get('/dogs/name', async (req,res) => {
  const  name  = req.query.name;
  if(name){
    const dogsName = await AllHome()
    let dogFilter =  dogsName.filter(d => d.name === name )
    res.json(dogFilter)
    }else{
      res.status(404).json({ "msg": "raza no encotrada"})
    }

});
router.get('/temperament', async (req,res) =>{
try{
  const TemperamentosDog = await allTemperaments();
res.send(TemperamentosDog )
}catch(e){
  res.status(404)
}
})
router.get("/dogs/:id", async (req, res) => {
  const id = req.params.id;
  const DogDetail = await allDogs();
  if (id) {
    let DogId = DogDetail.filter((el) => el.id == id);
    DogId.length
      ? res.status(200).json(DogId )
      : res.status(404).send("Dog no encontrado");
  }
})
const {Dog, Temperamento} = require('../db')

router.post('/dog', async (req,res) =>{
try{
  const{ name, weight,height,life_span, temperamento} = req.body;
const newDog = await Dog.create({
    name, 
    weight,
    height,
    life_span,
    
})

let tempDog = await Temperamento.findAll({
    where: { name: temperamento }
  });
  newDog.addTemperamento(tempDog);
    res.send('raza creada')
} catch(e){
res.send(404)
}
} )









module.exports = router;
