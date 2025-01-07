import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-manager-angular-v3';
}
