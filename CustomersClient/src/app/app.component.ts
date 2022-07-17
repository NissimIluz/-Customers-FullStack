import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userConstants } from './constants/userConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(router: Router) {
    const data = localStorage.getItem(userConstants.data);
    if(data) {
      router.navigate(['/client']);
    }
    else {
      router.navigate(['/login']);
    }
  }
}
