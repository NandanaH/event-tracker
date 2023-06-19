import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedRole!: string;

  constructor(private router: Router) {}

  redirectToDashboard() {
    if (this.selectedRole === 'user') {
      this.router.navigate(['/userdashboard']); // Navigate to the userdashboard route
    }
  }

}
