import {carregarTodos, inserirKeyLogs, carregarKeylog, atualizarKeylog} from '../controllers/keylogsController';


function configurarRotas(app)
{
    app.route('/keylogs')
        .get(carregarTodos)
        .post(inserirKeyLogs);

    app.route('/keylogs/:Id')    
        .get(carregarKeylog)
        .put(atualizarKeylog);
};

export default configurarRotas;