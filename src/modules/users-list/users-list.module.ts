import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatPaginatorModule,
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDividerModule
} from '@angular/material';
import { CoreModule } from '../core';
import { UsersResolver } from './resolvers';
import { PaginationResolver } from './resolvers/pagination.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
  ],
  providers: [
    UsersResolver,
    PaginationResolver
  ]
})
export class UsersListModule { }
