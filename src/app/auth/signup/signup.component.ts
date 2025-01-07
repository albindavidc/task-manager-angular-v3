import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  message: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSignup(form: NgForm): void {
    if (form.valid) {
      this.authService.signup(form.value).subscribe((msg) => {
        this.message = msg;
        if (msg === 'User have successfully logined') {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
