import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validacao2 } from "../../shared/middlewares/validation2";

//Validando o atributo id/nome irá receber
const id = yup.object().shape({
  id: yup.string().required().strict()
})
const nome = yup.object().shape({
  nome: yup.string().required().strict()

})

//Criação do middlewares:

//-> Validação de middlewares:
export const requestID = validacao2("params", "body", id, nome);

export const updateByid: RequestHandler = async (req, res) => {
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }


  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
