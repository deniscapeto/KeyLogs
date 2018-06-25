import express from 'express';
import configurarRotas from './src/routes/keylogs';
import bodyParser from 'body-parser';
import connectionMiddleware from './src/config/connectionMiddleware';
import pool from './src/config/connectionPoolFactory';

var app = express();

app.use(connectionMiddleware(pool));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: true}));  // to support URL-encoded bodies

configurarRotas(app);

app.listen(3000,() => console.log('servidor rodando na porta 3000'));
