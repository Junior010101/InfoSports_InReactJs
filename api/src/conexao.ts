import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "InfoSportsData"
});
