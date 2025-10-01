function addTask(description) {
  // Optionnel : ajouter le 'trim' et la vérification de nom vide pour la robustesse
  const trimmedDescription = String(description).trim();
  if (trimmedDescription.length === 0) {
    throw new Error("La description de la tâche ne peut pas être vide.");
  }
  
  const task = { id: nextId++, description: trimmedDescription, done: false };
  tasks.push(task);
  return task;
}

/**
 * Bascule l'état 'done' d'une tâche existante.
 * @param {number} id - L'ID de la tâche à basculer.
 * @returns {object} La tâche modifiée.
 * @throws {Error} Si aucune tâche n'est trouvée avec cet ID.
 */
function toggleTask(id) {
  // 1. Trouver la tâche par son ID
  const task = tasks.find(t => t.id === id);

  // 2. Gérer le cas où l'ID n'existe pas
  if (!task) {
    throw new Error(`Tâche avec l'ID ${id} non trouvée.`);
  }

  // 3. Basculer l'état (inverser la valeur booléenne)
  task.done = !task.done;

  return task;
}

module.exports = {
  getTasks,
  reset,
  addTask,
  toggleTask // NOUVEAU : Exporter la fonction
};