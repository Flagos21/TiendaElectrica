import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private userService: AuthService,
    private router: Router
  ) { }

  isSidenavOpen = true;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  closeSidenav() {
    this.isSidenavOpen = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login-register']);
      })
      .catch(error => console.log(error));
  }

}
