import { Component, ElementRef, viewChild } from '@angular/core';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private taskService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.taskService.addTasks({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
