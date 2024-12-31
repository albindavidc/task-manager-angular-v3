import {
  Component,
  computed,
  inject,
  input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../task.service';
import { Task, TaskStatus } from '../../task.model';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  private tasksService = inject(TasksService);
  task = input.required<Task>();
  @Output() delete = new EventEmitter<string>();

  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.tasksService.updateTasks(taskId, newStatus);
  }

  deleteTask(): void {
    this.delete.emit(this.task().id);
  }
}
