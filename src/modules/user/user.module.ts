import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UsersListRoutingModule } from '../users-list/users-list-routing.module';
import {
  MatPaginatorModule,
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  declarations: [UserComponent, UserDataComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
  ]
})
export class UserModule { }
