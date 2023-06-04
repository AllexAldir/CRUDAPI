import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
const router = Router()


router.get('/', (req, res) => { //Aqui coloca o metodo o qual irá ser feito
  return res.send('Rota GET'); //Resposta sendo enviada
})

router.post('/pessoa', (req, res) => { //Aqui recebe os dados
  console.log(req.body) //passa os dados para o body
  // console.log(req.params.id) Aqui passa as informações em um parâmetro

  return res.status(StatusCodes.ACCEPTED).send(req.body); //Resposta sendo enviada
  //status traz uma semântica de como está o status da resposta 
})

export { router }
