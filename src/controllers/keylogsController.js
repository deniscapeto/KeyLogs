import mysql from 'mysql';

export function carregarTodos(req,res){

  var sql = 'SELECT * FROM KeyLogs';
  req.connection.query(sql, function (err, result) {
    if (err) 
      throw err;

    res.send(result);
  });

}

export function carregarKeylog(req,res){

  var sql = 'SELECT * FROM KeyLogs';
  req.connection.query(sql, function (err, result) {
    if (err) 
      throw err;

    var resultado = result.filter(i => i.Id == req.params.Id);
    console.log("Result: " + resultado[0]);
    res.send(resultado);     

  });
}

export function inserirKeyLogs(req,res){
            
  console.log("body: " + req.body.json);
  console.log("body: " + req.body.usuario);
      
  var sql = `INSERT INTO KeyLogs(json,usuario) 
  values ('${ req.body.json }','${ req.body.usuario }')`;
  
  req.connection.query(sql, function (err, result) {
      if (err) 
          throw err;
      if(result.affectedRows >= 1)
          res.send('Incluído');
  });

}

export function atualizarKeylog(req,res){

  console.log("body: " + req.body.json);
  console.log("body: " + req.body.usuario);
      
  var sql = `UPDATE KeyLogs SET JSON = '${ JSON.stringify(req.body.json) }' WHERE id = ${ req.params.Id }`;
  
  req.connection.query(sql, function (err, result) {
      if (err) 
          throw err;
      if(result.affectedRows >= 1)
          res.send('Atualizado');
  });

}
