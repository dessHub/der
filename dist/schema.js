"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var apollo_server_1 = require("apollo-server");
// schema
exports.schema = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Categories {\n    categories: [String]\n  }\n\n  type Joke {\n    id: ID\n    created_at: String\n    icon_url: String\n    updated_at: String\n    url: String\n    value: String\n    categories: [String]\n  }\n\n  type Query {\n    joke: Joke\n    category: Categories\n    random(category: String): Joke\n  }\n"], ["\n  type Categories {\n    categories: [String]\n  }\n\n  type Joke {\n    id: ID\n    created_at: String\n    icon_url: String\n    updated_at: String\n    url: String\n    value: String\n    categories: [String]\n  }\n\n  type Query {\n    joke: Joke\n    category: Categories\n    random(category: String): Joke\n  }\n"])));
var templateObject_1;
