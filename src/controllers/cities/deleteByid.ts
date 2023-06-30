import { RequestHandler } from "express";
//import { StatusCodes } from "http-status-codes";
//import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";
import { connectToDatabase } from '../../database/index';
import { z } from 'zod';
import { Db, DeleteOneModel, ObjectId } from 'mongodb'

//-> validação
const schema = z.object({
  _id: z.string() //-> Retorna como number
  /*
    transform(id => Number(id)) transforma em number
  */
}).required({
  _id: true
});

//-> Validação de middlewares:
export const requestID = validacao("params", schema);

export const deleteByid: RequestHandler = async (req, res) => {
  const BD = await connectToDatabase()//-> conexão com o banco de dados
  const data: any = req.params['_id']

  const filter = { _id: new ObjectId(data) }
  console.log('ok')
  //@ts-ignore
  const collection = BD.collection(process.env.GAMES_COLLECTION_NAME);
  const document = req.params //-> requisição do usuário
  console.log(document)
  const result = await collection.deleteOne(filter);//-> exclusão do id

  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: `Documento removido com sucesso: ${result.deletedCount}`
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
