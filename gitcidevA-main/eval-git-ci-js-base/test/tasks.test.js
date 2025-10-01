const { toggleTask, addTestTask, getTasks, resetForTests } = require('../lib/tasks');

beforeEach(() => resetForTests());

test('toggleTask inverse done', () => {
  const t = addTestTask('Tâche 1', false);
  expect(t.done).toBe(false);

  const toggled = toggleTask(t.id);
  expect(toggled.done).toBe(true);

  const toggled2 = toggleTask(t.id);
  expect(toggled2.done).toBe(false);
});

test('toggleTask lance une erreur si id inconnu', () => {
  expect(() => toggleTask('999')).toThrow('task not found');
});

test('toggleTask laisse les autres tâches inchangées', () => {
  const t1 = addTestTask('T1', false);
  const t2 = addTestTask('T2', true);

  toggleTask(t1.id);
  const all = getTasks();
  expect(all.find(t => t.id === t1.id).done).toBe(true);
  expect(all.find(t => t.id === t2.id).done).toBe(true);
});
