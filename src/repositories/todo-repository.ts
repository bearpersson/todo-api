import { State } from 'src/state';

export class TodoRepository {
    constructor(private state: State) {}

    public getTodos(): Models.Todo[] {
        return this.state.todos;
    }

    public createTodo({ text }: Api.Create): void {
        const todo: Models.Todo = {
            text,
            completed: false,
            id: new Date().getMilliseconds().toString(),
        };

        this.state.todos.push(todo);
    }

    public updateTodo(id: string, update: Api.Update): void {
        const current = this.state.todos.find((todo) => todo.id === id);

        if (current) {
            Object.assign(current, update);
        }
    }

    public deleteTodo(id: string): void {
        const index = this.state.todos.findIndex((todo) => todo.id === id);

        if (index !== -1) {
            this.state.todos.splice(index, 1);
        }
    }
}
