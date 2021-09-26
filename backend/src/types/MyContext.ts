import {Request} from 'apollo-server-express'
export interface Session {
    userId?: string;
}
export interface MyContext {
    session?: Session;
    req?: Request;
}
