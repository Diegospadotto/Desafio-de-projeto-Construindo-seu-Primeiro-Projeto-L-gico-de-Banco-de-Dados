const Task = require('../models/taskModel');

describe('Task Model', () => {
  it('should add a task', () => {
    const task = Task.addTask('Test Task', 'Test Description');
    expect(task.title).toBe('Test Task');
    expect(task.description).toBe('Test Description');
  });

  it('should return a list of tasks', () => {
    Task.addTask('Another Task', 'Description');
    const tasks = Task.getTasks();
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should edit a task', () => {
    const task = Task.addTask('Old Task', 'Old Description');
    Task.editTask(task.id, 'Updated Task', 'Updated Description');
    expect(task.title).toBe('Updated Task');
    expect(task.description).toBe('Updated Description');
  });

  it('should delete a task', () => {
    const task = Task.addTask('Task to Delete', 'Description');
    Task.deleteTask(task.id);
    const tasks = Task.getTasks();
    expect(tasks.length).toBe(0);
  });
});