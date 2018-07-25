import KeylogDao from '../dao/keylogDao';

export function carregarTodos(req,res){

    new KeylogDao(req.connection).list()
    .then(keylogs => res.send(keylogs))
    .catch(e => res.status(500).send(e));
}

export function carregarKeylog(req,res){

  new KeylogDao(req.connection).selectById(req.params.Id)
  .then(keylogs => res.send(keylogs))
  .catch(e => res.status(500).send(e));
}

export function inserirKeyLogs(req,res){

  var keylog = { json: req.body.json, usuario: req.body.usuario };

  new KeylogDao(req.connection).insere(keylog)
  .then(resolve => res.send(resolve))
  .catch(e => res.status(500).send(e));
}

export function atualizarKeylog(req,res){
      
  var keylog = { json: req.body.json, usuario: req.body.usuario, Id: req.params.Id };

  new KeylogDao(req.connection).atualiza(keylog)
  .then(resolve => res.send(resolve))
  .catch(e => res.status(500).send(e));
}
