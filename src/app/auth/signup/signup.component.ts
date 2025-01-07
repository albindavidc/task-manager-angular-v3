import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  message: string = '';
  constructor(private authService: AuthService) {}

  onSignup(form: NgForm): void {
    if (form.valid) {
      this.authService
        .signup(form.value)
        .subscribe((msg) => (this.message = msg));
    }
  }
}
