import {carregarTodos, inserirKeyLogs, carregarKeylog} from '../controllers/keylogsController';


function configurarRotas(app)
{
    app.route('/keylogs')
        .get(carregarTodos)
        .post(inserirKeyLogs);

    app.route('/keylogs/:Id')    
        .get(carregarKeylog);
};

export default configurarRotas;