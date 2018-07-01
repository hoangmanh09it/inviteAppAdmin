import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	username: string;
	access_token: string;
	constructor() {
		this.username = localStorage.getItem("username") ? localStorage.getItem("username") : null;
		this.access_token = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null;
	}
	public login(userInfo) {
		let body = JSON.parse(userInfo._body)
		let user = body.data
		this.username = user.username;
		this.access_token = user.token;
		localStorage.setItem("username", user.username);
		localStorage.setItem("access_token", user.token);
		localStorage.setItem("userId", user.id);
	}
	public logoutService() {
		localStorage.removeItem('username');
		localStorage.removeItem('access_token');
		this.username = null;
		this.access_token = null;
	}

}
