import mysql from 'mysql';
import KeyLog from '../model/keylog';

export default class KeylogDao{

    constructor(private _connection: mysql.PoolConnection){

    }

    list(){

        return new Promise((res, rej)=>{

            var sql = 'SELECT * FROM KeyLogs';
            this._connection.query(sql, function (err, result) {
              if (err) 
                rej(err);
          
              res(result);
            });

        });

    }

    selectById(Id: number){

        return new Promise((res,rej) =>{
            
            var sql = 'SELECT * FROM KeyLogs';
            this._connection.query(sql, function (err, result: any[]) {
                if (err) 
                    rej(err);
    
                var resultado = result.filter((i : KeyLog) => i.Id == Id);
                console.log("Result: " + resultado[0]);
                res(resultado);     
            });
        });
    }

    insere(keylog: KeyLog){

        return new Promise((res,rej) =>{
            
            var sql = `INSERT INTO KeyLogs(json,usuario) 
            values ('${ JSON.stringify(keylog.JSON) }','${ keylog.Usuario }')`;
            
            this._connection.query(sql, function (err, result) {
                if (err) 
                    rej(err);
                if(result.affectedRows >= 1)
                    res('Incluído');
            });
        });

    }

    atualiza(keylog: KeyLog){

        return new Promise((res,rej) =>{

            var sql = `UPDATE KeyLogs SET JSON = '${ JSON.stringify(keylog.JSON) }', 
                usuario = '${ keylog.Usuario  }' WHERE id = ${ keylog.Id }`;
            console.log(sql);
            this._connection.query(sql, function (err, result) {

                console.log('erro:' + err);
                if (err) {
                    rej(err);
                    return;
                }
                if(result.affectedRows >= 1)
                    res('Atualizado');
            });
        });

    }
}