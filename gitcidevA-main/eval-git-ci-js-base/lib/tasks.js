// lib/tasks.js
let tasks = []; // tableau local pour cette branche
let nextId = 1;

// Fonction pour tests : ajoute une tâche simulée
function addTestTask(name, done = false) {
  const task = { id: String(nextId++), name: name.trim(), done };
  tasks.push(task);
  return task;
}

// La fonction à implémenter
function toggleTask(id) {
  const task = tasks.find(t => t.id === String(id));
  if (!task) {
    throw new Error('task not found');
  }
  task.done = !task.done;
  return task;
}

// Utile pour tester et réinitialiser le tableau
function resetForTests() {
  tasks = [];
  nextId = 1;
}

// Pour tests uniquement : accéder au tableau
function getTasks() {
  return tasks.slice();
}

module.exports = {
  toggleTask,
  addTestTask,
  resetForTests,
  getTasks
};
