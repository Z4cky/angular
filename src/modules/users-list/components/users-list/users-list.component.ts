import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface, UserListInterface } from '../../../../interfaces';
import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public displayedColumns = ['first_name', 'last_name', 'email'];
  public userList: any[] = [];
  public pagesCount: number;
  public pageSize: number;
  public page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.page = 1;
    this.activatedRoute.data.pipe(
      map(data => data.users)
    ).subscribe((usersList: UserListInterface) => {
      this.userList = usersList.data;
      this.pagesCount = usersList.total;
      this.pageSize = usersList.per_page;
    });
  }
  pageRouting(): void {
    this.router.navigate(['./users', this.page]);
  }
  pageChanged(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageRouting();
  }
  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
