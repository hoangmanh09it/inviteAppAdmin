// Imports
// Deprecated import
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { InviteTokenComponent } from './components/invite-token/invite-token.component';
import { CreateInviteTokenComponent } from './components/create-invite-token/create-invite-token.component';

export const routes: Routes = [
	{
		path: '',
		component: InviteTokenComponent
	},
	{
		path: 'login',
		component: AuthComponent
	},
	{
		path: 'create-invite-token',
		component: CreateInviteTokenComponent
	}
];
