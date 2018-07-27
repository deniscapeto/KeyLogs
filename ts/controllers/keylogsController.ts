import KeylogDao from '../dao/keylogDao';
import express from 'express';
import KeyLog from '../model/keylog';

export function carregarTodos(req: express.Request, res: express.Response){

    new KeylogDao(req.conexao).list()
    .then(keylogs => res.send(keylogs))
    .catch(e => res.status(500).send(e));
}

export function carregarKeylog(req: express.Request, res: express.Response){

  new KeylogDao(req.conexao).selectById(req.params.Id)
  .then(keylogs => res.send(keylogs))
  .catch(e => res.status(500).send(e));
}

export function inserirKeyLogs(req: express.Request, res: express.Response): void {

  //var keylog = { json: req.body.json, usuario: req.body.usuario };

  let keylog = new KeyLog(null, req.body.usuario,   req.body.json)

  new KeylogDao(req.conexao).insere(keylog)
  .then(resolve => res.send(resolve))
  .catch(e => res.status(500).send(e));
}

export function atualizarKeylog(req: express.Request, res: express.Response){
      
  //var keylog = { json: req.body.json, usuario: req.body.usuario, Id: req.params.Id };

  let keylog = new KeyLog(req.params.Id, req.body.usuario,   req.body.json)

  new KeylogDao(req.conexao).atualiza(keylog)
  .then(resolve => res.send(resolve))
  .catch(e => res.status(500).send(e));
}
