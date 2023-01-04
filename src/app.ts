import { Router } from 'express';
import { State } from './state';
import { TodoController } from './controllers/todo-contoller';
import { TodoRepository } from './repositories/todo-repository';

const initalState: Models.Todo[] = [
    {
        completed: false,
        id: '1',
        text: 'Make coffee',
    },
    {
        completed: false,
        id: '2',
        text: 'Play some good music',
    },
    {
        completed: false,
        id: '3',
        text: 'Code this app',
    },
];

const router = Router();
const state = new State(initalState);
const repository = new TodoRepository(state);
const controller = new TodoController(repository);

router.get('/', controller.getTodos.bind(controller));
router.post('/', controller.createTodo.bind(controller));
router.put('/:id', controller.updateTodo.bind(controller));
router.delete('/:id', controller.deleteTodo.bind(controller));

export default router;
