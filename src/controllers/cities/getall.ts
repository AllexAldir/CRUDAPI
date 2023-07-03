//-> Criação da controller para receber todas as cidades do banco
import { RequestHandler } from "express";
import * as yup from 'yup';
import { validacao } from "../../shared/middlewares/validation";
import { z } from 'zod';
import { conectionDatabase } from '../../database/index';
import mysql from 'mysql';
import express from 'express';

//Validando o atributo getAll
// const getAll = yup.object().shape({
//   nome: yup.string().notRequired().min(3).max(10),
//   limit: yup.number().notRequired().moreThan(0),
//   page: yup.number().notRequired().moreThan(0),
//   filter: yup.string().notRequired()
// })

const query = z.object({
  all: z.string()
})


//-> Validação de middlewares:
export const getAllCities = validacao("query", query);

export const city: RequestHandler = async (req, res) => {

  const DB = await conectionDatabase()//-> conexão com banco
  console.log(DB)
  const select = 'SELECT * FROM tbl_pessoa'; //-> select tabela

  DB.query(select, (error: any, results: any) => {
    if (error) {
      console.error('Erro ao obter os dados do banco:', error);
      res.status(500).json({ error: 'Erro ao obter os dados do banco' });
    } else {
      res.json(results);
    }
  });

  //const queryParamans = req //consegue ver os paramêtros da request
  //Reposta da requisicao
  const objetoGlobal = {
    status: 200,
    mensage: 'ok aceito'
  }

  res.send({ Dados: { status: objetoGlobal.status, mensage: objetoGlobal.mensage } })
};
