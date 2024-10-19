
enum State {
    START="start",
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
type ResponseMehtod = {
    message: string
}

interface ITodo {
    createTodo(todo: createTodoDTO): void
    delete(id: number ): void;
    getList(): void
    getByID(id: number) : void;
}

abstract class TodoRepository implements ITodo {
    protected Todos: Todo[];
    constructor(){
        this.Todos = []
    }
    public createTodo(todo: createTodoDTO): void {    }
    public delete(id: number ): void {    }
    public getList(): void {    }
    public getByID(id: number) : void {   }
}

class TodoController extends TodoRepository {
    protected static self:TodoController;
    protected static latestID:number;
    protected Todo: object [];
    constructor () {
        super()
        TodoController.self = this
    }
    public createTodo(todo: createTodoDTO): ResponseMehtod {
        const id = this.Todos.length
        const newTodo:Todo = {
            id,
            title: todo.title,
            state: todo.state
        }
        this.Todos.push(newTodo)
        TodoController.setLatastId(id)
        return {message: "created"}
    } 
    public getList():Todo[] {
        return this.Todos
    }
    public getByID(id: number): Todo | ResponseMehtod {
        const todo = this.Todos.find(todo => todo.id == id)
        if(todo) return todo
        return {message: "not found todo"}
    }
    public delete(id: number): ResponseMehtod {
        const Todos = this.Todos.filter(todo => todo.id !== id)
        this.Todos = Todos;
        return {message : "removed todo"}
    }
    public static getLastID():number {
        return TodoController.latestID;
    }
    public static setLatastId(id :number): void {
        TodoController.latestID = id;
        }
    public static countOfTodos():number {
        return TodoController.self.Todos.length;
    }
}

const todo = new TodoController();

console.log(todo.createTodo({title : " create todo list ", state: State.START }));
console.log(todo.createTodo({title : " creatfghe todo list ", state: State.START }));
console.log(todo.createTodo({title : " creafgte todo list ", state: State.START }));

console.log(todo.getList())

console.log(todo.getByID(0))
console.log(todo.delete(1))
console.log(todo.getByID(0))
console.log(TodoController.getLastID())
console.log(TodoController.countOfTodos())
