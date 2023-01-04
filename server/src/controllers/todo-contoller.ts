import { Request, Response } from 'express';
import { TodoRepository } from 'src/repositories/todo-repository';

export class TodoController {
    constructor(private repository: TodoRepository) {}

    public getTodos(request: Request, response: Response): void {
        response.send(this.repository.getTodos());
    }

    public createTodo(request: Request, response: Response): void {
        const { text } = request.body;

        if (text && typeof text !== 'string') {
            response.sendStatus(400);
        }

        this.repository.createTodo(request.body);

        response.sendStatus(200);
    }

    public updateTodo(request: Request, response: Response): void {
        const { text, completed } = request.body;

        if ((text && typeof text !== 'string') || typeof completed !== 'boolean') {
            response.sendStatus(400);
        }

        this.repository.updateTodo(request.params.id, request.body);

        response.sendStatus(200);
    }

    public deleteTodo(request: Request, response: Response): void {
        this.repository.deleteTodo(request.params.id);

        response.sendStatus(200);
    }
}
