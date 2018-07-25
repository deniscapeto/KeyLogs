import pool from './connectionPoolFactory';
import test from 'tape';

function runTests(){

    test.onFinish(() => process.exit(0));

    test('Connection Test',t=>{
        pool.getConnection((err, connection) => {
            t.assert(connection, 'Connection Estabilished');
            t.end();
        });
       
    })

}

export default  runTests;

