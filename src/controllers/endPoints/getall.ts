//-> Criação da controller para receber todas as cidades do banco
import { RequestHandler } from "express";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";
import { z } from 'zod';
import { conectionDatabase } from '../../database/index';
import * as mysql from 'mysql';
// const query = z.object({
//   all: z.string()
// })

// export async function getConnection(): Promise<oracledb.Connection> {
//   let connection: oracledb.Connection;

//   try {
//     connection = await oracledb.getConnection(conectionDatabase);
//     console.log('Conexão bem-sucedida ao banco de dados Oracle');
//   } catch (error) {
//     console.error('Erro ao conectar ao banco de dados Oracle', error);
//   }
//   //@ts-ignore
//   return connection;
// }


export const pessoas: RequestHandler = async (req, res) => {
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  try {
    const connection = await conectionDatabase();  
    const query = 'SELECT * FROM tb_pessoa'; //-> Query
    //@ts-ignore
    connection.query(query, (erro, resultado) => {
    
      return res.status(200).json({ 'Resultado da consulta': resultado })

    })

  } catch (e) {
    console.log(`Não foi possivel realizar a consulta ${e}`);

    return res.status(500).json({ 'Resultado da consulta': e })

  }
};
