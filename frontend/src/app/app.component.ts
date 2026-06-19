import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Toast, ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toasts: Toast[] = [];

  constructor(
    public toastService: ToastService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {

    this.authService.logout();

    localStorage.removeItem('user');

    this.router.navigate(['/login']);

    this.toastService.success('Logged out successfully');
  }
}