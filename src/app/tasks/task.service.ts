import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  updateEditTask(taskId: string, update: Partial<Task>) {
    const updateTasks = this.tasks().map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          ...update,
        };
      }
      return task;
    });
    this.tasks.set(updateTasks);
  }

  getTasks(): Task[] {
    return [...this.tasks()];
  }

  saveTasks(tasks: Task[]): void {
    this.tasks.set(tasks);
  }

  addTasks(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTasks(taskId: string, newStatus: TaskStatus): void {
    this.tasks.set(
      this.tasks().map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  deleteTasks(taskId: string): void {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }
}
