import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  selectedFilter = signal<string>('all');

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .getTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .getTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .getTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.getTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

  onDeleteTask(taskId: string): void {
    console.log(`Deleting task with ID: ${taskId}`);

    this.tasksService.deleteTasks(taskId);
  }
}
