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
  Body
} from '@angular/http/src/body';

import {
  InviteToken
} from '../../interfaces/invite-token'

@Component({
  selector: 'app-invite-token',
  templateUrl: './invite-token.component.html',
  styleUrls: ['./invite-token.component.css']
})
export class InviteTokenComponent implements OnInit {
  inviteTokens: [Object];
  newIviteToken: InviteToken;
  private ApiUrl = 'http://localhost:3000';
  constructor(private http: Http) {
    this.newIviteToken = {
      id: 0,
      code: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      active: false
    }
    // this.inviteTokens = [this.newIviteToken]
    let access_token = localStorage.getItem('access_token');
    let headers = new Headers({
      'Authorization': access_token
    });
    let options = new RequestOptions({
      headers: headers
    });
    let url = this.ApiUrl + '/api/invite-token';
    this.http.get(url, options).subscribe(respponse => {
      this.handleListInviteToken(respponse)
    }, error => {
      console.log(error)
    });
  }

  ngOnInit() {}

  public updateInviteTokenStatus(id, active = true) {
    let access_token = localStorage.getItem('access_token');
    let headers = new Headers({
      'Authorization': access_token
    });
    let options = new RequestOptions({
      headers: headers
    });
    if (!active || active === undefined) {
      active = false
    }
    let body = {
      "active": active
    };
    let url = this.ApiUrl + '/api/invite-token/' + id;
    this.http.put(url, body, options).subscribe(respponse => {
      this.hanldeUpdateStatus(respponse, false)
    }, error => {
      console.log(error)
    });
  }

  public generateInviteToken() {
    let access_token = localStorage.getItem('access_token');
    let headers = new Headers({
      'Authorization': access_token
    });
    let options = new RequestOptions({
      headers: headers
    });
    let url = this.ApiUrl + '/api/invite-token';
    this.http.post(url, {}, options).subscribe(respponse => {
      this.generateTokenHandle(respponse)
    }, error => {
      console.log(error)
    });
  }


  public copyToClipboard() {

  }

  private handleListInviteToken(respponse) {
    let body = JSON.parse(respponse._body)
    this.inviteTokens = body.data;
  }

  private hanldeUpdateStatus(response, active = true) {
    let body = JSON.parse(response._body);
    if (body.status == 200) {
      let updatedToken = body.data
      for (let index = 0; index < this.inviteTokens.length; index++) {
        let element: any
        element = this.inviteTokens[index];
        if (element.id === updatedToken.id) {
          element.active = updatedToken.active
          return;
        }
      }
    }
  }


  private generateTokenHandle(respponse) {
    let body = JSON.parse(respponse._body)
    this.newIviteToken = body.data;
  }


}
