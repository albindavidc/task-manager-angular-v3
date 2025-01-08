import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskFormComponent, TasksListComponent, CalculatorComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {}
