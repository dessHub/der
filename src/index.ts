import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { resolvers } from './resolvers';
import express from 'express';
import cors from 'cors';
import debug from 'debug';

const app = express();

app.use(cors());

const port = process.env.PORT || 4000;
const path = '/graphql';
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({app, path});

const logger = debug('log');

app.listen(port, (): void =>
  logger(
    `Server running at http://localhost:${port}${path}`,
  ),
);
