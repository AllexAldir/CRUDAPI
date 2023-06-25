import { Router } from 'express'
import * as create from '../controllers/cities/create';
import * as getAllCities from '../controllers/cities/getall';
import * as getbyID from '../controllers/cities/getbyID';
import * as updateByid from '../controllers/cities/updateByid';
import * as deleteByid from '../controllers/cities/deleteByid'
const router = Router()

router.get('/', (req, res) => { //Aqui coloca o metodo o qual irá ser feito
  return res.send('Teste de funcionamento da API'); //Resposta sendo enviada
})

router.post('/cidades', create.requestNome, create.city)

router.get('/cidades/:id', getbyID.requestID, getbyID.respostaByid)//-> resposta passando um id como parâmetro

router.put('/cidades/:id', updateByid.requestID, updateByid.updateByid,)//-> Rota de update por id

router.delete('/cidades/:id', deleteByid.requestID, deleteByid.deleteByid,)//-> Rota de update por id

router.get('/cidades', getAllCities.getAllCities, getAllCities.city)//-> Rota para trazer todas as cidades
//router.get('/cidades/:id', getAllCities.getAllCities, getAllCities.city)

export { router }
