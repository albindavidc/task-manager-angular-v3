import { Injectable } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private storageKey = 'taskManager';

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTasks(taskData: { title: string; description: string }) {
    const tasks = this.getTasks();
    const newTaskData: Task = {
      id: Math.random().toString(),
      title: taskData.title,
      description: taskData.description,
      status: 'OPEN',
    };
    tasks.push(newTaskData);
    this.saveTasks(tasks);
  }

  updateTasks(taskId: string, newStatus: TaskStatus): void {
    const tasks = this.getTasks().map((task) =>
      task.id === taskId ? { ...task, completed: newStatus } : task
    );
    this.saveTasks(tasks);
  }

  deleteTasks(taskId: string): void {
    const tasks = this.getTasks().filter((task) => task.id !== taskId);
    this.saveTasks(tasks);
  }
}
