import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer-navbar',
  templateUrl: './buyer-navbar.component.html',
  styleUrls: ['./buyer-navbar.component.css']
})
export class BuyerNavbarComponent {
logout() {
localStorage.clear();
}

}
