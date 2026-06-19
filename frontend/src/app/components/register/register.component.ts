import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  register(): void {

    if (!this.name || !this.email || !this.password) {
      this.toast.error('Please fill all fields');
      return;
    }

    this.isLoading = true;

    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({

      next: () => {

        this.isLoading = false;

        this.toast.success('Registration successful');

        this.router.navigate(['/login']);
      },

      error: (err) => {

        this.isLoading = false;

        this.toast.error(
          err.error?.error || 'Registration failed'
        );
      }
    });
  }
}