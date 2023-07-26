import { Router } from 'express'
import * as create from '../controllers/endPoints/create';
import * as getAllCities from '../controllers/endPoints/getall';
import * as getbyID from '../controllers/endPoints/getbyID';
import * as updateByid from '../controllers/endPoints/updateByid';
import * as deleteByid from '../controllers/endPoints/deleteByid'
const router = Router()

router.get('/', (req, res) => { //Aqui coloca o metodo o qual irá ser feito
  return res.send('Teste de funcionamento da API'); //Resposta sendo enviada
})

router.post('/cadastro', create.requestNome, create.city)

router.get('/cadastro/:id', getbyID.requestID, getbyID.respostaByid)//-> resposta passando um id como parâmetro

router.put('/cadastro/:id', updateByid.requestID, updateByid.updateByid,)//-> Rota de update por id

router.delete('/cadastro/:id', deleteByid.requestID, deleteByid.deleteByid,)//-> Rota de update por id

router.get('/allPeople', getAllCities.pessoas)//-> Rota para trazer todas as cidades
//router.get('/cidades/:id', getAllCities.getAllCities, getAllCities.city)

export { router }
