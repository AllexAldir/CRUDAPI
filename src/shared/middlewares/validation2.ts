import { RequestHandler } from "express";
//import { StatusCodes } from 'http-status-codes'

type val = (
  field: 'body' | 'header' | 'params' | 'query',
  field2: 'body' | 'header' | 'params' | 'query',
  yup: any,
  yup2: any
) => RequestHandler;//-> funcao que retorna um resquesthandler


export const validacao2: val = (field, field2, yup,yup2) => async (req, resp, next) => {
  console.log(field, field2)
  try {
    await yup.validate(req[field]); //validaçao da lib
    await yup2.validate(req[field2]); //validaçao do segundo campo
    next();
  } catch (e) {
    resp.json({ mensage: `Erro na requisicao ${e}` })

  };
}