import { PoolConnection } from "../../node_modules/@types/mysql";

declare global {
    namespace Express {
interface Request {
    conexao: PoolConnection,
    userId: string
  }}}