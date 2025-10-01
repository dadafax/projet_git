// Assurez-vous d'avoir ceci en haut de votre fichier de test :
const { getTasks, reset, addTask, toggleTask } = require('../lib/tasks');

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

// --- NOUVEAUX TESTS POUR toggleTask ---
describe('toggleTask', () => {
  
  test('should toggle task state from false to true', () => {
    // PRÉPARATION : Tâche ajoutée est done: false
    const task = addTask('Tâche à compléter'); 
    
    // EXÉCUTION
    const updatedTask = toggleTask(task.id);
    
    // VÉRIFICATION
    expect(updatedTask.done).toBe(true);
    expect(getTasks()[0].done).toBe(true);
  });

  test('should toggle task state from true back to false', () => {
    // PRÉPARATION : Ajouter et basculer une première fois (-> true)
    const task = addTask('Tâche déjà faite');
    toggleTask(task.id); 
    
    // EXÉCUTION : Basculer à nouveau (-> false)
    const updatedTask = toggleTask(task.id);
    
    // VÉRIFICATION
    expect(updatedTask.done).toBe(false);
    expect(getTasks()[0].done).toBe(false);
  });

  // Test de cas limite/erreur (Obligatoire pour l'évaluation)
  test('should throw an error if the task ID does not exist', () => {
    // VÉRIFICATION de l'erreur pour un ID inexistant (999)
    expect(() => {
      toggleTask(999); 
    }).toThrow("Tâche avec l'ID 999 non trouvée."); 
  });
});