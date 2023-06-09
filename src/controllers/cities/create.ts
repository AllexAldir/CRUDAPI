import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

//Criação da primeira controller:

interface City {
  nome: string,
  idade: number
}

export const teste = (request: Request, response: Response) => {
  return response.status(StatusCodes.ACCEPTED).send(request.body)
};

export const city = (request: Request<{}, {}, City>, response: Response) => {
  return response.send(request.body);
  //Aqui recebe os dados
  //console.log(req.body) //passa os dados para o body
  // console.log(req.params.id) Aqui passa as informações em um parâmetro

  //return res.status(StatusCodes.ACCEPTED).send(req.body); //Resposta sendo enviada
  //status traz uma semântica de como está o status da resposta
};