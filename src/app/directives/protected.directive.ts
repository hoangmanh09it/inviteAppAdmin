import { Directive } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';

import {LoginService} from '../services/login.service';

@Directive({
	selector: '[appProtected]'
})
export class ProtectedDirective {
	constructor(private userInfo: LoginService, private location: Location, private route: Router) {
		if (this.userInfo.username === null || this.userInfo.access_token === null || this.userInfo.username == undefined || this.userInfo.access_token == undefined) {
			route.navigate(['login']);
		}
	}
}
