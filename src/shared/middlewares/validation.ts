import { RequestHandler } from "express";
import { StatusCodes } from 'http-status-codes'

type val = (field: 'body' | 'header' | 'params' | 'query', yup: any) => RequestHandler;//-> funcao que retorna um resquesthandler

export const validacao: val = (field, yup) => async (req, resp, next) => {
  console.log('ok');

  try {
    await yup.validate(req[field]); //validaçao da lib
    next();
  } catch (e) {
    resp.json({ mensage: `Erro na requisicao ${e}` })

  };
}