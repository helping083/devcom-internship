import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GithubUsers } from '../../models/githubUsers.interface';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-classicsubject',
  templateUrl: './classicsubject.component.html',
  styleUrls: ['./classicsubject.component.scss']
})
export class ClassicsubjectComponent implements OnInit, OnDestroy {
  public githubUsers$!: Observable<GithubUsers[]>;

  constructor(private readonly _subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.githubUsers$ = this._getUsers();
  }

  private _getUsers(): Observable<GithubUsers[]> {
    return this._subjectsService.githubUsers
  }

  ngOnDestroy() {

  }
}
