import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  login(): void {

    if (!this.email || !this.password) {
      this.toast.error('Please fill all fields');
      return;
    }

    this.isLoading = true;

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({

      next: (response) => {

        this.isLoading = false;

        // Save JWT token
        this.authService.saveToken(response.token);

        // Optional: Save user info
        localStorage.setItem(
          'user',
          JSON.stringify(response.user)
        );

        this.toast.success('Login successful');

        this.router.navigate(['/']);
      },

      error: (err) => {

        this.isLoading = false;

        this.toast.error(
          err.error?.error || 'Login failed'
        );
      }
    });
  }
}