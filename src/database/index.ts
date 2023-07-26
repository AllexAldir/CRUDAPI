import oracledb from 'oracledb';
import * as mysql from 'mysql';
import 'dotenv/config'

// Configurações da conexão com o banco de dados
const dbConfig: mysql.ConnectionConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};

export const conectionDatabase: any = async () => {
  //-> Conexão com banco da oracle
  try {
    return await mysql.createConnection(dbConfig); //-> conexão com database
    //console.log('Conexão com o banco de dados foi estabelecida')
  } catch (e) {
    throw new Error(`Erro na conexão com banco ${e}`);

  }

}