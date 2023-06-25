import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";

//Validando o atributo id
const id = yup.object().shape({
  id: yup.string().required().strict()
})

//Criação do middlewares:

//-> Validação de middlewares:
export const requestID = validacao("params", id);

export const respostaByid: RequestHandler = async (req, res) => {
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
