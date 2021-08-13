import { AuthenticationError } from 'apollo-server-express';

const jwt = require('jsonwebtoken');

require('dotenv').config();

const Auth = (context: any) => {
    // console.log(context);
    const authHeader = context.req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        // Bearer ....
        // const token =
        if (authHeader) {
            try {
                const user = jwt.verify(
                    authHeader.replace('Bearer ', ''),
                    process.env.SECRET
                );
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error("Authentication token must be 'Bearer [token]");
    }
    throw new Error('Authorization header must be provided');
};
export { Auth };
