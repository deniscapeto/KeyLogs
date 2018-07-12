import dotenv from 'dotenv-safe'; /*Para ler as variaveis de ambiente*/
dotenv.load();

import runTests from './src/config/connectionPoolFactory.test';
runTests();

