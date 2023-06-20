//-> Criação da controller para receber todas as cidades do banco
import { RequestHandler } from "express";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";

//Validando o atributo getAll
const getAll = yup.object().shape({
	nome: yup.string().notRequired().min(3).max(10),
	limit: yup.number().notRequired().moreThan(0),
	page: yup.number().notRequired().moreThan(0),
	filter: yup.string().notRequired()
})


//-> Validação de middlewares:
export const getAllCities = validacao("query", getAll);

export const city: RequestHandler = async (req, res) => {
	//const queryParamans = req //consegue ver os paramêtros da request
	//Reposta da requisicao
	const objetoGlobal = {
		status: 200,
		mensage: 'ok aceito'
	}

	res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
