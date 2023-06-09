import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

//Criação da primeira controller:

//Interface para tipar o objeto:
interface City {
  nome: string;
}

//Validando o atributo nome
const validation: yup.Schema<City> = yup.object().shape({
  nome: yup.string().required().min(2)
});

export const city = async (req: Request<{}, {}, City>, res: Response) => {
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  let valideDate: City | undefined;
  //Validação dos campos no front-end
  try {
    valideDate = await validation.validate(req.body)
    //console.log(valideDate)
    // return response.send('ok')
  } catch (error) {
    objetoGlobal.mensage = `Erro ao fazer a requisicao ${error}`
    objetoGlobal.status = 401;

  } finally {
    res.status(objetoGlobal.status).send('Efetuada com sucesso');
  }

};

export const teste = (request: Request, response: Response) => {
  return response.status(StatusCodes.ACCEPTED).send(request.body)
};