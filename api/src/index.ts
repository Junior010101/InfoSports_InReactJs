import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/routes'
import path from 'path';

//iniciando express
const app = express();

//configurações
const porta = 3000;

//ativando logs
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//iniciando a api
const start = async () => {
    app.use(express.static(path.join(__dirname, '/public')));
    app.use('/', router);

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
