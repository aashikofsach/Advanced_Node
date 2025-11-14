const express = require('express');
const homeController = require('../../controller/home.controller');

const v2Router = express.Router() ;


v2Router.get('/shree', homeController) ;

module.exports = v2Router ;
