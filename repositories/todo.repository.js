
const todos = [] ;

class TodoRepositories
{
 insert(todo)
 {
    todo.push({id : todos.length , text : todo})
 }
 getAll()
 {
    return todos;
 }
 getOne(id)
 {
    return todos.filter((todo)=> todo.id === id)[0];
 }
}

module.exports = TodoRepositories