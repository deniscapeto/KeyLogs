import dotenv from 'dotenv-safe'; /*Para ler as variaveis de ambiente*/
dotenv.load();

import runTests from './config/connectionPoolFactory.test';
runTests();

