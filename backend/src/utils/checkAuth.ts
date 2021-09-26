// import { AuthenticationError } from 'apollo-server-express';
import { MiddlewareFn } from 'type-graphql';
// const jwt = require('jsonwebtoken');

require('dotenv').config();

const Auth: MiddlewareFn = (context : any) : any => {
    // console.log(context);
    // const authHeader = context.req.headers.authorization;
    // console.log(authHeader);
    // if (authHeader) {
    //     // Bearer ....
    //     // const token =
    //     if (authHeader) {
    //         try {
    //             const user = jwt.verify(
    //                 authHeader.replace('Bearer ', ''),
    //                 process.env.SECRET
    //             );
    //             return user;
    //         } catch (err) {
    //             throw new AuthenticationError('Invalid/Expired token');
    //         }
    //     }
    //     throw new Error("Authentication token must be 'Bearer [token]");
    // }
    // throw new Error('Authorization header must be provided');
    console.log(context.req)
};
export { Auth };
