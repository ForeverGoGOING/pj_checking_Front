import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {IndexComponent} from '../index/index.component';
import {BlocklyLearnComponent} from '../blockly-learn/blockly-learn.component';
import {UserInfoComponent} from '../user-info/user-info.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'blockly-learn', component: BlocklyLearnComponent},
  {path: '', component: IndexComponent},
  {path:'userInfo',component: UserInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
