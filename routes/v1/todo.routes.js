const express = require('express');
const { todoGetController, todoPostController } = require('../../controller/todo.controller');


const todoRoutes = express.Router() ;

todoRoutes.get('/',todoGetController ) ;
todoRoutes.post('/', todoPostController)


module.exports = todoRoutes ;
