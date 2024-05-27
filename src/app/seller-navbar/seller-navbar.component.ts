import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent {
logout() {
localStorage.clear()
}

}
