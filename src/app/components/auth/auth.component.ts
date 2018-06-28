import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from "@angular/http";
import {
  Router
} from "@angular/router";

import {
  LoginService
} from '../../services/login.service'
import 'rxjs'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  constructor(private http: Http, private userLogin: LoginService, private route: Router) {
    if (this.userLogin.username && this.userLogin.access_token) {
      route.navigate(['']);
    }

  }
  public login() {
    if (this.username !== null && this.password !== null) {
      let body = JSON.stringify({
        "username": this.username,
        "password": this.password
      });
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({
        headers: headers
      });
      this.http.post('http://localhost:3000/api/auth/login', body, options).subscribe(response => {
      this.handleSuccess(response)
      }, error => {
        this.handleErr(error)
      });
    }
  }
  ngOnInit() {}
  private handleErr(err) {
    //this.userLogin.remove();
  }
  private handleSuccess(data) {
    this.userLogin.login(data);
    this.route.navigate(['/']);
  }
}
