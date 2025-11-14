
const TodoRepositories = require('../repositories/todo.repository');
const TodoService = require('../service/todo.service');


const todoservice = new TodoService(new TodoRepositories());


function todoGetController(req, res){

    const response = todoservice.getAllTodos();


    return res.send({
        data : response
    });
}

function todoPostController(req, res)
{
    console.log("line is 21 ")
    const todotext = req.body.todotext ;

    console.log("line next to 21")

    todoservice.create(todotext);

    return res.send({
        data : "New Todo Created !"
    })
}

module.exports = {todoGetController , todoPostController} ;
