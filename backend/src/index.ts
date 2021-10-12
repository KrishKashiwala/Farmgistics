import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './graphql/resolvers';
require('./server');
//  express setup
const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    });
    const apolloserver = new ApolloServer({
        schema,
        context: ({ req }) => req
    });
    const app = Express();
    app.use(
        cors({
            credentials: true,
            origin: true
        })
    );
    app.use(logger('dev'));
    app.use(Express.json());
    app.use(Express.urlencoded({ extended: true }));

    // express session
    app.use(
        session({
            name: 'qid',
            secret: 'aslkdfjoiq12312',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
            },
            store: MongoStore.create({
                mongoUrl: process.env.DATABASE,
                collection: 'sessions'
            })
        })
    );

    await apolloserver.applyMiddleware({ app });
    app.listen(process.env.PORT || 4000, () => {
        console.log('server started on http://localhost:4000/graphql');
    });


};
main();

