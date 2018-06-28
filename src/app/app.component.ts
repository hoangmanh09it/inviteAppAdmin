import {
  Component
} from '@angular/core';
import {
  LoginService
} from './services/login.service';
import {
  Router
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'app';
  constructor(public userInfo: LoginService, public route: Router) {

  }
  public logout() {
    this.userInfo.logoutService();
    this.route.navigate(['login']);
  }
}
