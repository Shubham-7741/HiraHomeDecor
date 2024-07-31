import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isAdminLoggedInSubject = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn$ = this.isAdminLoggedInSubject.asObservable();

  constructor() { }

  setAdminLoggedIn(isLoggedIn: boolean) {
    this.isAdminLoggedInSubject.next(isLoggedIn);
  }
}
