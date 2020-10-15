import {gql} from 'apollo-server';

// schema
export const schema = gql`
  type Query {
    test: String!
  }
`;

