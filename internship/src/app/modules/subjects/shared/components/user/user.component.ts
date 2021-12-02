import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubUsers } from '../../models/githubUsers.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  private _user!: GithubUsers;

  @Input() set user(user: GithubUsers) {
    this._user = user;
  }

  public get user(): GithubUsers {
    return this._user
  }

  constructor() { }

  ngOnInit(): void {
  }

}
