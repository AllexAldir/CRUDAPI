import { RequestHandler } from "express";
//import { StatusCodes } from "http-status-codes";
//import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../database/index'
import 'dotenv/config'

//Validando o atributo id
const id = z.object({
  id: z.string().transform(id => Number(id))
}).required({
  id: true
})

//Criação do middlewares:

//-> Validação de middlewares:
export const requestID = validacao("params", id);

export const respostaByid: RequestHandler = async (req, res) => {

  const bd = await connectToDatabase()
  //@ts-ignore
  const collection: any = bd.collection(process.env.GAMES_COLLECTION_NAME);
  const valorRequest = Number(req.params['id'])
  //console.log(typeof valorRequest)
  const query = { id: valorRequest }; // Query para buscar por ID

  const documento = await collection.findOne(query);

  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito',
    valor: documento
  }


  if (documento) {
    res.send({
      Geral: {
        status: objetoGlobal.status,
        mensage: objetoGlobal.mensage,
        valor: objetoGlobal.valor
      }
    })
  } else {
    res.status(404).send({
      Erro: 'Não encontrado',
    })
  }

};
