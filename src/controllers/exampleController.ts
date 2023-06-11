import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

//Criação da primeira controller:

//Interface para tipar o objeto:
interface City {
  nome: string;
}

//Validando o atributo nome
const validation: yup.Schema<City> = yup.object().shape({
  nome: yup.string().required().min(2).strict()
});

const validadad = yup.object().shape({
  nome: yup.string().required().strict().min(3).max(9)
})


//Criação do middlewares:

export const validaRequest: RequestHandler = async (req, res, next) => {
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  let valideDate: City | undefined;
  //Validação dos campos no front-end
  try {
    await validadad.validate(req.body); //validaçao da lib

  } catch (error) {
    objetoGlobal.mensage = `Erro ao fazer a requisicao ${error}`
    objetoGlobal.status = 401;

  } finally {
    res.status(objetoGlobal.status).json({ mensage: objetoGlobal.mensage, Dados: { valideDate } });
  }

};

/*---------------------------------------------------------------------------------------*/

export const city = async (req: Request<{}, {}, City>, res: Response) => {

};

