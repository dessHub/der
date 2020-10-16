"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var schema_1 = require("./schema");
var resolvers_1 = require("./resolvers");
var app = express_1.default();
app.use(cors_1.default());
var port = process.env.PORT || 4000;
var path = '/graphql';
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.schema,
    resolvers: resolvers_1.resolvers,
});
server.applyMiddleware({ app: app, path: path });
app.listen(port, function () {
    return console.log("Server running at http://localhost:" + port + path);
});
