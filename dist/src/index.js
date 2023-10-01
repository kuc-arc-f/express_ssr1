"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cors = require('cors');
var server_1 = require("react-dom/server");
var App_1 = require("./views/ssr/App");
var App_2 = require("./views/csr/App");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3 * 24 * 60 * 1000,
        secure: false
    }
}));
app.get('/', function (req, res) {
    try {
        res.send({ name: "welcome" });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
app.get('/ssr', function (req, res) {
    try {
        res.send((0, server_1.renderToString)((0, App_1.Ssr)()));
    }
    catch (error) {
        res.sendStatus(500);
    }
});
app.get('/csr', function (req, res) {
    try {
        res.send((0, server_1.renderToString)((0, App_2.Csr)()));
    }
    catch (error) {
        res.sendStatus(500);
    }
});
var PORT = 4000;
app.listen({ port: PORT }, function () {
    console.log("Server ready at http://localhost:".concat(PORT));
});
console.log('start');
exports.default = app;
