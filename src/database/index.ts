import { MongoClient, Db } from 'mongodb';
import 'dotenv/config'

// const conection = process.env.DB_CONN_STRING

export async function connectToDatabase(): Promise<Db> {
	//console.log('teste de entrada da funcao')
	const uri = process.env.DB_CONN_STRING
	//@ts-ignore
	const client = new MongoClient(uri);

	try {
		await client.connect();
		console.log('Conexão com o banco de dados estabelecida.');
		return client.db();
	} catch (err) {
		console.error('Erro ao conectar-se ao banco de dados:', err);
		throw err;
	}
}
