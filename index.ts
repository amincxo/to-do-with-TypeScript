
enum State {
    QUEUE="queue",
    DONE="done",
    CANCEL="cancel",
    TOP_LIST="topList"
}

type Todo = {
    id:number;
    title:string;
    state:State
}

type createTodoDTO = {
    title: string;
    state : State;
}

interface ITodo {
    createTodo(todo: createTodoDTO): void
    delete(id: number ): void;
    getList(): void
    getByID(id: number) : void;
}

abstract class TodoRepository {
    protected Todos: Todo[];
    constructor(){
        this.Todos = []
    }
    public createTodo(todo: createTodoDTO): void {

    }
    public delete(id: number ): void {

    }
    public getList(): void {    }
    public getByID(id: number) : void {   }
}

class TodoController extends TodoRepository {
    protected Todo: object [];
    constructor () {
        super()
    }
    public createTodo(todo: createTodoDTO): any {
        return {newTodo: "created"}
    } 
}

const todo = new TodoController();

console.log(todo.createTodo({title : " ", state: State.DONE }))

