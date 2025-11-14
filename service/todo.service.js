class TodoService{

    constructor(todoRepository)
    {
        this.todoRepository = todoRepository 
    }

    create(todoText)
    {
        if(todoText.length === 0) return 

        todoText = todoText.trim().toUpperCase();
        this.todoRepository.insert(todoText)
    }

    getOneTodo(id)
    {
        this.todoRepository.getOne(id)

    }
    getAllTodos()
    {
        this.todoRepository.getAll();
    }

}

module.exports = TodoService ;
