import jwt from 'jsonwebtoken';
import express from 'express';

export default function configurarRotaLogin(app: express.Application)
{
    app.post('/login', (req: express.Request, res: express.Response, next: express.NextFunction) => {

        console.log(req.body.user);
        console.log(req.body.pwd);
        /*TODO: implementar autenticacao*/ 
        if(req.body.user === 'denis' && req.body.pwd === '123'){
          //auth ok
          const id = 1; //esse id viria do banco de dados
          var token = jwt.sign( <any>{id} , process.env.SECRET, {
            expiresIn: 300 // expira em 5min
          });
          res.status(200).send({ auth: true, token: token });
        }
        else      
          res.status(500).send('Login inválido!');
      });

      
    app.get('/logout', function(req: express.Request, res: express.Response) {
        res.status(200).send({ auth: false, token: null });
    });
      
}



