import express from 'express';
import configurarRotas from './routes/keylogs';
import configurarRotaLogin from './routes/login';
import bodyParser from 'body-parser';
import connectionMiddleware from './config/connectionMiddleware';
import verifyJWT from './config/authenticationMiddleware';
import pool from './config/connectionPoolFactory';
import dotenv from 'dotenv-safe'; /*Para ler as variaveis de ambiente*/

/*carregar as caviaveis de ambiente*/ 
dotenv.load();

var app = express();

app.use(connectionMiddleware(pool));
app.use(bodyParser.json());// to support JSON-encoded bodies
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: true})); //to support URL-encoded bodies
app.use(verifyJWT);

configurarRotas(app);
configurarRotaLogin(app);

app.listen(3000,() => console.log('servidor rodando na porta 3000'));
