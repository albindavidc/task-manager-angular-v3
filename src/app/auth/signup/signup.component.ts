import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  message: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSignup(form: NgForm): void {
    if (form.valid) {
      this.authService.signup(form.value).subscribe({
        next: (msg: string) => {
          this.message = msg;
          this.router.navigate(['/home']);
        },
        error: (error: Error) => {
          console.error('Signup failed', error),
            (this.message = 'Signup failed. Please try again.');
        },
      });
    }
  }
}
