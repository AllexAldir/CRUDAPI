import { RequestHandler } from "express";
//import { StatusCodes } from 'http-status-codes'


//Interface de paginacao:
// interface getAll {
//   page?: number,
//   limit?: number,
//   fitler?: string
// }

type val = (field: 'body' | 'header' | 'params' | 'query', yup: any) => RequestHandler;//-> funcao que retorna um resquesthandler


export const validacao: val = (field, yup) => async (req, resp, next) => {
  console.log(req[field]); //-> verificação do campo 

  try {
    await yup.validate(req[field]); //validaçao da lib
    //console.log(yup)
    next();
  } catch (e) {
    resp.json({ mensage: `Erro na requisicao ${e}` })

  };
}