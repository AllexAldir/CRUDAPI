import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

//Criação da primeira controller:

//Interface para tipar o objeto:
interface City {
  nome: string;
}

//Validando o atributo nome
const validanome = yup.object().shape({
  nome: yup.string().required().strict().min(3).max(9)
})

const validaquery = yup.object().shape({
  filter: yup.string().required().strict().min(3)
})

//Criação do middlewares:

export const queryValidatition: RequestHandler = async (req, res, next) => {
  //Validação dos campos no front-end
  try {
    await validaquery.validate(req.query); //validaçao da lib
    next();
  } catch (e) {
    res.json({ mensage: `Erro na requisicao ${e}` })

  };
}

export const validaRequest: RequestHandler = async (req, res, next) => {
  //Validação dos campos no front-end
  try {
    await validanome.validate(req.body); //validaçao da lib
    next();
  } catch (e) {
    res.json({ mensage: `Erro na requisicao ${e}` })

  };
}
/*---------------------------------------------------------------------------------------*/

export const city = async (req: Request<{}, {}, City>, res: Response) => {
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};