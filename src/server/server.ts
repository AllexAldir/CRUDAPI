import express from 'express';
import { router } from '../routes/rota';
import 'dotenv/config'
import * as database from '../database/index';

const serve = express(); //Configuração para a criação de rotas do servidor


serve.use(express.json()) //Retornando as informações do front end para a api
serve.use(router); //Utilizando a rota a qual foi importada
//serve.use(database.connectToDatabase); //-> conexão com banco 
//database.connectToDatabase(); //-> pass conexão

export { serve };