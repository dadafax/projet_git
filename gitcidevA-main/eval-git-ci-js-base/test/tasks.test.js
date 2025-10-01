const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('adding a task stores it in the list', () => {
  const task = addTask('Faire mes devoirs');
  expect(task).toEqual({ id: 1, description: 'Faire mes devoirs', done: false });
  expect(getTasks()).toEqual([{ id: 1, description: 'Faire mes devoirs', done: false }]);
});