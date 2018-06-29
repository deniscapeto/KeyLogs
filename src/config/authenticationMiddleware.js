import jwt from 'jsonwebtoken';

export default function verifyJWT(req, res, next){

    if(req.path == '/login')
        next();

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided. Use x-access-token header to provide a valid token ' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Falha na autenticação do token' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }