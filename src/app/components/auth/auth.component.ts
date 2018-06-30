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
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  API_URL = environment.API_URL;
  isLoginFaild = false;
  errorMessage : string
  constructor(private http: Http, private userLogin: LoginService, private route: Router) {
    if (this.userLogin.username && this.userLogin.access_token) {
      route.navigate(['']);
      console.log(this.API_URL)
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
      this.http.post(this.API_URL+ '/api/auth/login', body, options).subscribe(response => {
      this.handleSuccess(response)
      }, error => {
        this.handleErr(error)
      });
    }
  }
  ngOnInit() {}
  private handleErr(error) {
    this.isLoginFaild = true;
    if (error.status === 0) {
      this.errorMessage = "Netword error"
    }else {
      let body = JSON.parse(error._body)
      this.errorMessage = body.statusText
    }
  }
  private handleSuccess(data) {
    this.isLoginFaild = false;
    this.userLogin.login(data);
    this.route.navigate(['/']);
  }
}
