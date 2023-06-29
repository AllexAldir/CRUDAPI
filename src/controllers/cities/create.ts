import { RequestHandler } from "express";
//import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";
import { InsertOneResult } from 'mongodb';
import * as database from '../../database/index';
import 'dotenv/config'
//const validaRequisicao = validacao.validacao




//Criação da primeira controller:

//Validando o atributo nome
const validanome = yup.object().shape({
  nome: yup.string().required().strict().min(3).max(19)
})

//Criação do middlewares:

//-> Validação de middlewares:
export const requestNome = validacao("body", validanome);

export const city: RequestHandler = async (req, res) => {
  const BD = await database.connectToDatabase()//-> conexão com o banco de dados
  
  //@ts-ignore
  const collection = BD.collection(process.env.GAMES_COLLECTION_NAME);
  const document = req.body //-> requisição do usuário
  const result: InsertOneResult<any> = await collection.insertOne(document);

  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: `Documento inserido com sucesso: ${result.insertedId}`
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
