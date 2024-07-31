import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import { SharedService } from 'src/app/Service/shared.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminname: string = '';
  adminpassword: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const isLoginPage = event.url === '/adminLogin'; // Adjust the URL for your login page
        if (isLoginPage) {
          // Disable browser forward option
          history.pushState({}, '', location.href);
        }
      }
    });
  }

  login() {
    this.authService.login(this.adminname, this.adminpassword).subscribe({
      next: (result: any) => {
        if (result && result.message === 'Valid User') {
          localStorage.setItem('admin', JSON.stringify(result));
          this.router.navigate(['adminhome/admin_products']);
          this.toastr.success('Login successful!', 'Success');
        } else {
          this.toastr.error(
            'Login failed. Please check your credentials.',
            'Error'
          );
        }
      },
      error: (err: any) => {
        console.error('Error:', err);
        this.toastr.error(
          'Invalid credentials. Please check your credentials. ',
          'Error'
        );
      },
    });
  }
}
