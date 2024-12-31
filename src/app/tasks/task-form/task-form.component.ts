import { Component, ElementRef, ViewChild } from '@angular/core';
import { TasksService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @ViewChild('form', { static: false }) formEl!: NgForm;

  constructor(private taskService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.taskService.addTasks({ title, description });
    if (this.formEl) {
      this.formEl.reset();
    }
  }
}
