import { RequestHandler } from "express";
//import { StatusCodes } from 'http-status-codes'


type val = (field: 'body' | 'header' | 'params' | 'query', yup: any) => RequestHandler;//-> funcao que retorna um resquesthandler


export const validacao: val = (field, zod) => async (req, resp, next) => {
  console.log(req[field]); //-> verificação do campo 

  try {
    await zod.parse(req[field]); //validaçao da lib
    //console.log(yup)
    next();
  } catch (e) {
    resp.json({ mensage: `Erro na requisicao ${e}` })

  };
}