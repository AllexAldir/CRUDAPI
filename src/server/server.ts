import express from 'express';
import { router } from '../routes';

const serve = express(); //Configuração para a criação de rotas do servidor

interface Teste {

}

serve.use(express.json()) //Retornando as informações do front end para a api
serve.use(router); //Utilizando a rota a qual foi importada

export { serve };   