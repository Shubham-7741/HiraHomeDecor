import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(aname: string, apassword: string): Observable<any> {
    const data = { aname, apassword };
    return this.http
      .post<any>(`https://hiradecor.beatsacademy.in/adminLogin/`, data)
      .pipe(
        tap((response) => {
          if (response && response.message === 'Valid User') {
            localStorage.setItem('admin', 'true');
          }
        })
      );
  }

  isLoggedIn() {
    return !!localStorage.getItem('admin');
  }

  logout() {
    localStorage.removeItem('admin');
  }
}
