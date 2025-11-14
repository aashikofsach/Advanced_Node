const express = require('express');
const homeController = require('../controller/home.controller');

const routerObj = express.Router();

const v1Router = require('./v1')
const v2Router = require('./v2')



routerObj.use('/v1', v1Router)
routerObj.use('/v2', v2Router)

routerObj.get("/home" , homeController)


module.exports = routerObj ;