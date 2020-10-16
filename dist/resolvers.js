"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var fetch = require('node-fetch');
var url = 'https://api.chucknorris.io/';
// resolvers
exports.resolvers = {
    Query: {
        joke: function () {
            return new Promise(function (resolve, reject) {
                fetch(url + "jokes/random")
                    .then(function (res) { return res.json(); })
                    .then(function (data) { return resolve(data); });
            });
        },
        category: function () {
            return new Promise(function (resolve, reject) {
                fetch(url + "jokes/categories")
                    .then(function (res) { return res.json(); })
                    .then(function (categories) {
                    resolve({ categories: categories });
                });
            });
        },
        random: function (parent, args) {
            return new Promise(function (resolve, reject) {
                fetch(url + "jokes/random?category=" + args.category)
                    .then(function (res) { return res.json(); })
                    .then(function (data) { return resolve(data); });
            });
        },
    },
};
