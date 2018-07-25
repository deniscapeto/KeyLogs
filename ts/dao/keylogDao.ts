export default class KeylogDao{

    constructor(private _connection){

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

    selectById(Id){

        return new Promise((res,rej) =>{
            
            var sql = 'SELECT * FROM KeyLogs';
            this._connection.query(sql, function (err, result) {
                if (err) 
                    rej(err);
    
                var resultado = result.filter(i => i.Id == Id);
                console.log("Result: " + resultado[0]);
                res(resultado);     
            });
        });
    }

    insere(keylog){

        return new Promise((res,rej) =>{
            
            var sql = `INSERT INTO KeyLogs(json,usuario) 
            values ('${ JSON.stringify(keylog.json) }','${ keylog.usuario }')`;
            
            this._connection.query(sql, function (err, result) {
                if (err) 
                    rej(err);
                if(result.affectedRows >= 1)
                    res('Incluído');
            });
        });

    }

    atualiza(keylog){

        return new Promise((res,rej) =>{

            var sql = `UPDATE KeyLogs SET JSON = '${ JSON.stringify(keylog.json) }', 
                usuario = '${ keylog.usuario }' WHERE id = ${ keylog.Id }`;
            
            this._connection.query(sql, function (err, result) {

                console.log('erro:' + err);
                if (err) 
                    rej(err);
                if(result.affectedRows >= 1)
                    res('Atualizado');
            });
        });

    }
}