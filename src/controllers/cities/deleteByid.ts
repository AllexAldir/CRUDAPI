import { RequestHandler } from "express";
//import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";
import {connectToDatabase} from '../../database/index';

//Validando o atributo id 
const id = yup.object().shape({
  _id: yup.string().required().strict()
})

//Criação do middlewares:

//-> Validação de middlewares:
export const requestID = validacao("params", id);

export const deleteByid: RequestHandler = async (req, res) => {
  const BD = await connectToDatabase()//-> conexão com o banco de dados

  //@ts-ignore
  const collection = BD.collection(process.env.GAMES_COLLECTION_NAME);
  const document = req.params //-> requisição do usuário
  console.log(document)
  const result = await collection.deleteOne(document);

  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: `Documento inserido com sucesso: ${result.deletedCount}`
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
