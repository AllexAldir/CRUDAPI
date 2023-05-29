import express from 'express';

const serve = express(); //Configuração para a criação de rotas do servidor

interface Teste {

}

serve.get('/', (req, res) => { //Aqui coloca o metodo o qual irá ser feito
  return res.send('Hello world'); //Resposta sendo enviada
});

export { serve };