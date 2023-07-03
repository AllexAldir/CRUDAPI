import mysql from 'mysql';
import 'dotenv/config'

const params = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE
}

export const conectionDatabase: any = async () => {

  try {
    return await mysql.createConnection(params); //-> conexão com database
    //console.log('Conexão com o banco de dados foi estabelecida')
  } catch (e) {
    throw new Error(`Erro na conexão com banco ${e}`);

  }

}