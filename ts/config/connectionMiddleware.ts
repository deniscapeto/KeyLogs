import express from 'express';
import { Pool } from '../../node_modules/@types/mysql';

export default (pool: Pool )=> (req: express.Request, res: express.Response, next: express.NextFunction) => {
    pool.getConnection((err, connection) => {
        if (err)
            return next(err);
        //console.log('pool => obteve conexão');
        // adicionou a conexão na requisição
        req.conexao = connection;
        // passa a requisição o próximo middleware
        next();
        // devolve a conexão para o pool no final da resposta
        res.on('finish', () => req.conexao.release());
    });
};