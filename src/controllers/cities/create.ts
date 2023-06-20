import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";

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
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
