const fetch = require('node-fetch');
const url: string = 'https://api.chucknorris.io/';

// resolvers
export const resolvers = {
  Query: {
    joke() {
      return new Promise((resolve, reject) => {
        fetch(`${url}jokes/random`)
          .then((res: { json: () => any; }) => res.json())
          .then((data: any) => resolve(data));
      });
    },
    category() {
      return new Promise((resolve, reject) => {
        fetch(`${url}jokes/categories`)
          .then((res: { json: () => any; }) => res.json())
          .then((categories: any) => {
            resolve({categories});
          });
      });
    },
    random(parent: void, args: Args) {
      return new Promise((resolve, reject) => {
        fetch(
          `${url}jokes/random?category=${args.category}`,
        )
          .then((res: { json: () => any; }) => res.json())
          .then((data: any) => resolve(data));
      });
    },
  },
};
