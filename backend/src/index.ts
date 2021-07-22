import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
const logger = require('morgan');
const cors = require('cors');
const MongoStore = require('connect-mongo');
const session = require('express-session');
// const helmet = require('helmet');
require('dotenv').config();
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './graphql/resolvers/resolvers';

require('./server');
//  express setup
const app = Express();
app.use(cors());
app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// app.set('trust proxy', 1); //trust proxy
// app.use(helmet());
// express session
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.DATABASE,
            collection: 'sessions'
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    });
    const server = new ApolloServer({
        schema
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(5000, () =>
        console.log('server started on url => https://localhost:5000/graphql')
    );
};
main();
