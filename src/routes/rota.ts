import { Router } from 'express'
import * as create from '../controllers/cities/create';
import * as getAllCities from '../controllers/cities/getall';
const router = Router()

router.get('/', (req, res) => { //Aqui coloca o metodo o qual irá ser feito
  return res.send('Teste de funcionamento da API'); //Resposta sendo enviada
})

router.post('/cidades', create.requestNome, create.city)

router.get('/cidades', getAllCities.getAllCities, getAllCities.city)
//router.get('/cidades/:id', getAllCities.getAllCities, getAllCities.city)

export { router }
