import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from 'src/modules/core/services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObs: Observable<UserInterface>;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.userObs = this.apiService.fetchUserById(userId);
  }

  back(): void {
    this.router.navigate(['./users/1']);
  }
}
