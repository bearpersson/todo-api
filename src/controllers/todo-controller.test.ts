import { Request, Response } from 'express';
import { TodoController } from './todo-contoller';
import { TodoRepository } from '../repositories/todo-repository';

describe('TodoController', () => {
    let request: Request;
    let response: Response;
    let controller: TodoController;
    let repository: {
        getTodos: jest.Mock;
        createTodo: jest.Mock;
        updateTodo: jest.Mock;
        deleteTodo: jest.Mock;
    };

    beforeEach(() => {
        repository = {
            getTodos: jest.fn(),
            createTodo: jest.fn(),
            updateTodo: jest.fn(),
            deleteTodo: jest.fn(),
        };
        controller = new TodoController(repository as unknown as TodoRepository);
        request = {} as Request;
        response = {
            send: jest.fn(),
            sendStatus: jest.fn(),
        } as unknown as Response;
    });

    describe('getTodos', () => {
        it('calls repository.getTodos', () => {
            controller.getTodos(request, response);
            expect(repository.getTodos).toHaveBeenCalledWith();
        });

        it('calls response.send with the repository value', () => {
            repository.getTodos.mockReturnValue([{ id: '1' }]);
            controller.getTodos(request, response);
            expect(response.send).toHaveBeenCalledWith([{ id: '1' }]);
        });
    });

    describe('createTodo', () => {
        it('calls repository.createTodo', () => {
            request.body = { text: 'Todo text' };
            controller.createTodo(request, response);
            expect(repository.createTodo).toHaveBeenCalledWith({ text: 'Todo text' });
        });

        it('returns a 200 status', () => {
            request.body = { text: 'Todo text' };
            controller.createTodo(request, response);
            expect(response.sendStatus).toHaveBeenCalledWith(200);
        });

        it(`returns a 400 if text isn't of type string`, () => {
            request.body = { text: 123 };
            controller.createTodo(request, response);
            expect(response.sendStatus).toHaveBeenCalledWith(400);
        });
    });

    describe('updateTodo', () => {
        it('calls repository.updateTodo', () => {
            request.params = {
                id: '1',
            };
            request.body = { text: 'Todo text', completed: true };
            controller.updateTodo(request, response);
            expect(repository.updateTodo).toHaveBeenCalledWith('1', { text: 'Todo text', completed: true });
        });

        it('returns a 200 status', () => {
            request.params = {
                id: '1',
            };
            request.body = { text: 'Todo text', completed: true };
            controller.updateTodo(request, response);
            expect(response.sendStatus).toHaveBeenCalledWith(200);
        });

        it(`returns a 400 if text isn't of type string`, () => {
            request.params = {
                id: '1',
            };
            request.body = { text: 123, completed: true };
            controller.updateTodo(request, response);
            expect(response.sendStatus).toHaveBeenCalledWith(400);
        });

        it(`returns a 400 if completed isn't of type boolean`, () => {
            request.params = {
                id: '1',
            };
            request.body = { text: 'Todo text', completed: 123 };
            controller.updateTodo(request, response);
            expect(response.sendStatus).toHaveBeenCalledWith(400);
        });
    });

    describe('deleteTodo', () => {
        it('calls repository.deleteTodo', () => {
            request.params = {
                id: '1',
            };
            controller.deleteTodo(request, response);
            expect(repository.deleteTodo).toHaveBeenCalledWith('1');
        });

        it('returns a 200 status', () => {
            request.params = {
                id: '1',
            };
            request.body = { text: 'Todo text', completed: true };
            controller.deleteTodo(request, response);
            expect(response.sendStatus).toHaveBeenCalledWith(200);
        });
    });
});
