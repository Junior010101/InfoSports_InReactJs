import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//iniciando express
const app = express();

//configurações
const porta = 3000;

//ativando logs
app.use(cors());
app.use(morgan('dev'));

//iniciando a api
const start = async () => {
    try{
        app.listen(porta, () => {
            console.log(`\u001b[34mServidor conectado na porta ${porta}...\u001b[37m`);
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();
