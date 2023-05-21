import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123', // senha do seu banco de dados
  database: 'TypeScriptExpress',
});