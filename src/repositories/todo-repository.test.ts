import { TodoRepository } from './todo-repository';
import { State } from '../state';

describe('TodoRepository', () => {
    let repository: TodoRepository;

    beforeEach(() => {
        const state = new State([
            {
                id: '1',
                text: 'Shop',
                completed: false,
            },
            {
                id: '2',
                text: 'Code',
                completed: false,
            },
            {
                id: '3',
                text: 'Eat',
                completed: false,
            },
        ]);

        repository = new TodoRepository(state);
    });

    describe('getTodos', () => {
        it('returns all items in the state', () => {
            expect(repository.getTodos().map((item) => item.text)).toEqual(['Shop', 'Code', 'Eat']);
        });
    });

    describe('createTodo', () => {
        it('adds a todo', () => {
            repository.createTodo({ text: 'New task' });
            expect(repository.getTodos().find((item) => item.text === 'New task')?.text).toBeDefined();
        });
    });

    describe('deleteTodo', () => {
        it('deletes a todo by id', () => {
            repository.deleteTodo('1');
            expect(repository.getTodos().find((item) => item.id === '1')).not.toBeDefined();
        });

        it(`doesn't perform delete if the id doesn't exist`, () => {
            repository.deleteTodo('4');
            expect(repository.getTodos()).toHaveLength(3);
        });
    });

    describe('updateTodo', () => {
        it('updates a todo', () => {
            repository.updateTodo('1', { text: 'Shop', completed: true });
            expect(repository.getTodos().find((item) => item.id === '1')?.completed).toBe(true);
        });
    });
});
