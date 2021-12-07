import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { IPost } from 'src/app/core/data/models';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searcControl: FormControl = new FormControl('');

  constructor(private readonly _postsService: PostsService) { }

  ngOnInit(): void {
    this.searcControl.valueChanges
      .pipe(
        debounceTime(400),
        map((val: string): string => val.trim()),
        distinctUntilChanged((prev: string, curr: string) => prev === curr),
        switchMap((val: string) => {
          const data: IPost = {
            userId: Math.floor(Math.random() * 10),
            id: Math.floor(Math.random() * 100),
            title: val,
            body: val
          }
          return this._postsService.sendPost(data);
        })
      )
      .subscribe(
        (savedPost: IPost): void => {
          console.log('saved post', savedPost)
        }
      );
  }

}
