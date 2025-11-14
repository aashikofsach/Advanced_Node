const express = require('express');
const homeController = require('../../controller/home.controller');
const todoRoutes = require('./todo.routes');


const v1Router = express.Router() ;


v1Router.use('/todo',todoRoutes)

v1Router.get('/jai', homeController);

module.exports = v1Router ;
