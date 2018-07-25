import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "keyloggerdbinstance.cnvf4sntgqxj.sa-east-1.rds.amazonaws.com",
    user: "sa",
    password: "sasasasa",
    database: "keyloggerdb"
});

console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada')); 

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

//module.exports = pool;
export default pool;