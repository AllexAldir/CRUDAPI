import { Router } from 'express'
import * as create from '../controllers/cities/create';

const router = Router()

router.get('/', (req, res) => { //Aqui coloca o metodo o qual irá ser feito
  return res.send('Teste de funcionamento da API'); //Resposta sendo enviada
})

router.post('/cidades', create.validaRequest, create.queryValidatition, create.city)

export { router }
