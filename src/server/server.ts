import express from 'express';

const serve = express(); //Configuração para a criação de rotas do servidor

serve.get('/', (req, res) => {
    return res.send('Hello world') //Resposta sendo enviada
})

export { serve }