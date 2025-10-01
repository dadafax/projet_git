let tasks = [];
let nextId = 1;

function getTasks() {
  return tasks;
}

function reset() {
  tasks = [];
  nextId = 1;
}

function addTask(description) {
  const task = { id: nextId++, description, done: false };
  tasks.push(task);
  return task;
}

module.exports = { getTasks, reset, addTask };
