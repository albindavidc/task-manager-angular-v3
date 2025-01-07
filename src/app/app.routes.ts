import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {
    path: '/home',
    component: TasksComponent,
    // children: [{ path: 'new', component: TaskFormComponent }],
  },

  { path: '**', redirectTo: '' },
  { path: '', component: LoginComponent },
  { path: '/signUp', component: SignupComponent },
];
