import {carregarTodos, inserirKeyLogs, carregarKeylog, atualizarKeylog} from '../controllers/keylogsController';
import express from 'express';

function configurarRotas(app: express.Express)
{
    app.route('/keylogs')
        .get(carregarTodos)
        .post(inserirKeyLogs);

    app.route('/keylogs/:Id')    
        .get(carregarKeylog)
        .put(atualizarKeylog);
};

export default configurarRotas;