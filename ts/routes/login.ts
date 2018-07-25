import jwt from 'jsonwebtoken';

export default function configurarRotaLogin(app)
{
    app.post('/login', (req, res, next) => {

        /*TODO: implementar autenticacao*/ 
        if(req.body.user === 'denis' && req.body.pwd === '123'){
          //auth ok
          const id = 1; //esse id viria do banco de dados
          var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expira em 5min
          });
          res.status(200).send({ auth: true, token: token });
        }
        else      
          res.status(500).send('Login inválido!');
      });

      
    app.get('/logout', function(req, res) {
        res.status(200).send({ auth: false, token: null });
    });
      
}



