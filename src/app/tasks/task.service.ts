import { Injectable } from '@angular/core';
import { Task } from './task.model';

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

  addTasks(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  updateTasks(updateTask: Task): void {
    const tasks = this.getTasks().map((task) =>
      task.id === updateTask.id ? updateTask : task
    );
    this.saveTasks(tasks);
  }

  deleteTasks(taskId: string):void{
    const tasks = this.getTasks().filter((task) => task.id !== taskId)
    this.saveTasks(tasks);
  }
}
