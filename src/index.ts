import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { schema } from './schema';
import { resolvers } from './resolvers';

const app = express();

app.use(cors());

const port = process.env.PORT || 4000;
const path = '/graphql';
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({app, path});

app.listen(port, (): void =>
  console.log(
    `Server running at http://localhost:${port}${path}`,
  ),
);
